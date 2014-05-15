module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.paths.demo %>/images',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: '<%= config.paths.site %>/images'
    }]
  }
};
