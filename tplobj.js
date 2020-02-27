module.exports = function(left, right) {
  return function(tpl, obj) {
    var str = JSON.stringify(tpl);
    for (var key in obj) {
      var arg = JSON.stringify(obj[key]);
      arg = arg.slice(1, arg.length - 1);
      str = str.split(left + key + right).join(arg);
    }
    var r = { ...tpl, ...JSON.parse(str) };
    Object.setPrototypeOf(r, Object.getPrototypeOf(tpl));
    return r;
  };
};
