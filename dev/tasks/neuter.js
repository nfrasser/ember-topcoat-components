module.exports = {
  app: {
    src: '<%= config.paths.app %>/scripts/tc.js',
    dest: '.tmp/scripts/app-scripts.js'
  },

  demo: {
    src: '<%= config.paths.demo %>/scripts/app.js',
    dest: '.tmp/scripts/demo-scripts.js'
  }
};
