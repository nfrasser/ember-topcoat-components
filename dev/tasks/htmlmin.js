module.exports = {
  dist: {
    options: {
      /*removeCommentsFromCDATA: true,
      // https://github.com/config/grunt-usemin/issues/44
      //collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true*/
    },
    files: [{
      expand: true,
      cwd: '<%= config.paths.demo %>',
      src: '*.html',
      dest: '<%= config.paths.site %>'
    }]
  }
};
