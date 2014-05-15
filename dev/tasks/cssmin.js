module.exports = {
  dist: {
    files: {
      '<%= config.paths.site %>/styles/main.css': [
        '.tmp/styles/{,*/}*.css',
        '<%= config.paths.demo %>/styles/{,*/}*.css'
      ]
    }
  }
};
