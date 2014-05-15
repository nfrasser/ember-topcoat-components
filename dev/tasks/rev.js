module.exports = {
  site: {
    files: {
      src: [
        '<%= config.paths.site %>/scripts/{,*/}*.js',
        '<%= config.paths.site %>/styles/{,*/}*.css',
        '<%= config.paths.site %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        '<%= config.paths.site %>/styles/fonts/*'
      ]
    }
  }
};
