module.exports = {
  templates: {
    files: '<%= config.paths.app %>/templates/**/*.hbs',
    tasks: ['emberTemplates:app']
  },
  scripts: {
    files: ['<%= config.paths.app %>/scripts/{,*/}*.js'],
    tasks: ['neuter:app']
  },
  demoTemplates: {
    files: '<%= config.paths.demo %>/templates/**/*.hbs',
    tasks: ['emberTemplates:demo']
  },
  demoStyles: {
    files: ['<%= config.paths.demo %>/styles/{,*/}*.{scss,sass,css}'],
    tasks: ['sass:demo']
  },
  demoScripts: {
    files: ['<%= config.paths.demo %>/scripts/{,*/}*.js'],
    tasks: ['neuter:demo']
  },
  demoReplace: {
    files: ['<%= config.paths.demo %>/*.html'],
    tasks: ['replace:demo']
  },
  livereload: {
    options: {
      livereload: require('../config').ports.livereload
    },
    files: [
      '.tmp/scripts/*.js',
      '.tmp/*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= config.paths.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
