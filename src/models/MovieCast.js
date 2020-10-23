var _ = require('lodash');

function MovieCast(title, cast) {
  _.extend(this, {
    title: title,
    cast: cast.map(function (c) {
      return {
        title: c[0],
        sc: c[1],
        role: c[2]
      }
    })
  });
}

module.exports = MovieCast;