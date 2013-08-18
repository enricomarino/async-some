module.export = function (array, iterator, callback) {
  var completed = 0;
  var len = array.length;
  var i;
  var complete;

  complete = function (err, result) {
    if (err) {
      callback(err);
      callback = function () {};
      return;
    }
    if (result) {
      callback(err, true);
      callback = function () {};
      return;
    }
    completed += 1;
    if (completed === len) {
      callback(err, false);
      return;
    }
  }

  for (i = 0; i < len; i += 1) {
    iterator(array[i], complete);
  }
};
