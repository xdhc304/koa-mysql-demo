const ResultUtil = {
  success: (data) => {
    obj = {
      code: 0,
      success: true,
      data: data
    }
    return obj
  }
}

module.exports = ResultUtil