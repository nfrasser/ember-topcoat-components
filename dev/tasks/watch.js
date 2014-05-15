module.exports = {
  templates: {
    files: '<%= config.app %>/templates/**/*.hbs',
    tasks: ['emberTemplates:app']
  },
  scripts: {
    files: ['<%= config.app %>/scripts/{,*/}*.js'],
    tasks: ['neuter:app']
  },
  demoTemplates: {
    files: '<%= config.demo %>/templates/**/*.hbs',
    tasks: ['emberTemplates:demo']
  },
  demoStyles: {
    files: ['<%= config.demo %>/styles/{,*/}*.{scss,sass,css}'],
    tasks: ['compass:demo']
  },
  demoScripts: {
    files: ['<%= config.demo %>/scripts/{,*/}*.js'],
    tasks: ['neuter:demo']
  },
  demoReplace: {
    files: ['<%= config.demo %>/*.html'],
    tasks: ['replace:demo']
  },
  livereload: {
    options: {
      livereload: require('../config').livereload
    },
    files: [
      '.tmp/scripts/*.js',
      '.tmp/*.html',
      '.tmp/styles/{,*/}*.css',
      '<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
