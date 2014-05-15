module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= config.paths.app %>/scripts/{,*/}*.js',
    '<%= config.paths.demo %>/scripts/{,*/}*.js',
    '!**/scripts/vendor/*',
    'test/spec/{,*/}*.js'
  ]
};
