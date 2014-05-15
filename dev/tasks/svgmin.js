module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= config.paths.demo %>/images',
      src: '{,*/}*.svg',
      dest: '<%= config.paths.site %>/images'
    }]
  }
};
