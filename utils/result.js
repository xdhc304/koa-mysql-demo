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
  },
  toHump: (str) => {
    return str.replace(/\_(\w)/g, function(all, letter){
      return letter.toUpperCase();
    });
  },
  toLine: (str) => {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
}

module.exports = ResultUtil