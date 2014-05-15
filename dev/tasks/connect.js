var config = require('../config'),
  lrSnippet = require('connect-livereload')({
    port: config.ports.livereload
  }),
  mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

module.exports = {
  options: {
    port: 9000,
    // change this to '0.0.0.0' to access the server from outside
    hostname: 'localhost'
  },

  demo: {
    options: {
      middleware: function (connect) {
        return [
          lrSnippet,
          mountFolder(connect, '.tmp'),
          mountFolder(connect, '.'),
          mountFolder(connect, config.paths.demo)
        ];
      }
    }
  },
  test: {
    options: {
      port: 9001,
      middleware: function (connect) {
        return [
          mountFolder(connect, 'test'),
          mountFolder(connect, '.tmp')
        ];
      }
    }
  },

  site: {
    options: {
      port: 9002,
      middleware: function (connect) {
        return [
          mountFolder(connect, config.paths.site)
        ];
      }
    }
  }

};
