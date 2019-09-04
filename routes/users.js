const router = require('koa-router')()
const service = require('../utils/query')
const ResultUtil = require('../utils/result')

router.prefix('/users')

router.get('/list', async (ctx, next) => {
  const result = await service.listblog(1)
  ctx.body = ResultUtil.success(result);
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
