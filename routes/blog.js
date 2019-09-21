const router = require('koa-router')()
const service = require('../utils/query')
const ResultUtil = require('../utils/result')

router.prefix('/blog')

router.get('/list', async (ctx, next) => {
  await service.listblog().then((data) => {
    data.forEach(val => {
      for (i in val) {
        let index = ResultUtil.toHump(i);
        val[index] = val[i];
        delete val[i];
      }
    });
    ctx.body = ResultUtil.success(data);
  })
})

router.get('/getblogbyid', async (ctx, next) => {
  let id = ctx.request.query.id;
  await service.getblogbyid(id).then((data) => {
    data.forEach(val => {
      for (i in val) {
        let index = ResultUtil.toHump(i);
        val[index] = val[i];
        delete val[i];
      }
    });
    ctx.body = ResultUtil.success(data);
  })
})

router.get('/getblogbyid/:id', async (ctx, next) => {
  let {id} = ctx.params;
  await service.getblogbyid(id).then((data) => {
    data.forEach(val => {
      for (i in val) {
        let index = ResultUtil.toHump(i);
        val[index] = val[i];
        delete val[i];
      }
    });
    ctx.body = ResultUtil.success(data);
  })
})

router.get('/add', async (ctx, next) => {
  let arr = [];
  arr.push('koa2');
  arr.push('xdhc304');
  arr.push('https://www.jianshu.com/p/b4e36739d85a');
  arr.push('简书');
  arr.push(new Date());
  arr.push(new Date());

  // let obj = {
  //   blog_title: 'koa2',
  //   blog_author: 'xdhc304',
  //   blog_url: 'https://www.jianshu.com/p/b4e36739d85a',
  //   blog_platform: '简书',
  //   create_time: new Date(),
  //   last_edit_time: new Date()
  // }

  await service.addblog(arr).then((data) => {
    if (data.affectedRows != 0) {
      ctx.body = {
        data: 'success'
      }
    }
  }).catch(() => {
    ctx.body = {
      data: 'err'
    }
  })
})

module.exports = router
