const ResultUtil = {
  success: (data) => {
    let obj = {
      code: 0,
      success: true,
      data: data ? data : undefined
    }
    return obj
  },
  error: (data) => {
    let obj = {
      code: -1,
      success: false,
      message: data ? data : undefined
    }
    return obj
  }
}

module.exports = ResultUtil