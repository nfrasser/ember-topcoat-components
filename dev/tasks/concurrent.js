module.exports = {
  demo: [
    'emberTemplates',
    'sass:demo'
  ],
  test: [
    'emberTemplates:app'
  ],
  dist: [
    'emberTemplates',
    'sass:dist',
    'imagemin',
    'svgmin',
    'htmlmin'
  ]
};
