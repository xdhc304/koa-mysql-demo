const mysql = require('mysql')
const MYSQL_CONFIG = require('../config/mysql_config') // 数据库配置

// mysql
const pool = mysql.createPool(MYSQL_CONFIG)

const service = {
  // query sql语句入口
  query: (sql, val) => {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, val, (err, fields) => {
            if (err) {
              reject(err)
            } else {
              resolve(fields)
            }
            connection.release()
          })
        }
      })
    })
  },
  listblog: (name) => {
    let _sql = `select * from tb_blog where blog_id="${name}";`
    return service.query(_sql)
  },
  addblog: (obj) => {
    let _sql = "insert into tb_blog set blog_title=?,blog_author=?,blog_url=?,blog_platform=?,create_time=?,last_edit_time=?;"
    return service.query(_sql, obj)
  }
}

module.exports = service
