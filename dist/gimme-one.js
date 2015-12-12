(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  var randomInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var gimme = function(list) {
    var num = randomInRange(0, list.length);
    return list[num];
  };

  /* istanbul ignore else */
  if (isNode) {
    module.exports = gimme;
  } else {
    window.gimmeOne = gimme;
  }
})();
