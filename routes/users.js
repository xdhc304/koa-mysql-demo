const router = require('koa-router')()
const service = require('../utils/query.js')

router.prefix('/users')

router.get('/list', async (ctx, next) => {
  console.log(ctx)
  ctx.body = await service.listblog(1);
})

router.get('/add', async (ctx, next) => {
  let arr = [];

  arr.push('koa2');
  arr.push('xdhc304');
  arr.push('https://www.jianshu.com/p/b4e36739d85a');
  arr.push('简书');
  arr.push(new Date());
  arr.push(new Date());

  await service.addblog(arr).then((data) => {
    let r = '';
    if (data.affectedRows != 0) {
      r = 'ok';
    }
    ctx.body = {
      data: r
    }
  }).catch(() => {
    ctx.body = {
      data: 'err'
    }
  })
})

module.exports = router
