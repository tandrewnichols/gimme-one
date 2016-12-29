(function() {
  var isNode = typeof module !== 'undefined' && this.module !== module;

  var gimme = function(list) {
    var rand = Math.floor(Math.random() * (list.length + 1));
    return list[rand];
  };

  /* istanbul ignore else */
  if (isNode) {
    module.exports = gimme;
  } else {
    window.gimmeOne = gimme;
  }
})();
