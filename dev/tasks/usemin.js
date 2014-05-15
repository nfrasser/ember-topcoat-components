module.exports = {
  html: ['<%= config.paths.site %>/{,*/}*.html'],
  css: ['<%= config.paths.site %>/styles/{,*/}*.css'],
  options: {
    dirs: [
      '<%= config.paths.site %>'
    ],
    assetDirs: [
      'vendor'
    ]
  }
};
