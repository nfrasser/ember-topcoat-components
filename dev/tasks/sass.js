module.exports = {
  options: {
    imagePath: '<%= config.paths.demo %>/images',
    includePaths: ['vendor']
  },
  dist: {
    options: {
      outputStyle: 'compressed',
    },
    files: {
      '.tmp/styles/style.css': '<%= config.paths.demo %>/styles/style.scss'
    }
  },
  demo: {
    options: {
      sourceComments: 'map'
    },
    files: {
      '.tmp/styles/style.css': '<%= config.paths.demo %>/styles/style.scss'
    }
  }
};
