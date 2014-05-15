
var config = require('./dev/config');

module.exports = function (grunt) {
  'use strict';

  // show elapsed time at the end
  require('time-grunt')(grunt);

  // load all grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // configurable paths

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: config,
    banner: [
      '/**',
      ' *  <%= pkg.title || pkg.name %> <%= pkg.version %>',
      ' *  <%= pkg.description %>',
      ' *  <%= pkg.homepage %>',
      ' *  <%= pkg.author %>',
      ' */\n'
    ].join('\n'),

    clean: require('./dev/tasks/clean'),
    concurrent: require('./dev/tasks/concurrent'),
    connect: require('./dev/tasks/connect'),
    copy: require('./dev/tasks/copy'),
    emberTemplates: require('./dev/tasks/emberTemplates'),
    'gh-pages': require('./dev/tasks/gh-pages'),
    htmlmin: require('./dev/tasks/htmlmin'),
    imagemin: require('./dev/tasks/imagemin'),
    jshint: require('./dev/tasks/jshint'),
    neuter: require('./dev/tasks/neuter'),
    open: require('./dev/tasks/open'),
    qunit: require('./dev/tasks/qunit'),
    replace: require('./dev/tasks/replace'),
    rev: require('./dev/tasks/rev'),
    sass: require('./dev/tasks/sass'),
    svgmin: require('./dev/tasks/svgmin'),
    symlink: require('./dev/tasks/symlink'),
    uglify: require('./dev/tasks/uglify'),
    usemin: require('./dev/tasks/usemin'),
    useminPrepare: require('./dev/tasks/useminPrepare'),
    watch: require('./dev/tasks/watch')

  });

  // Currently only the targets 'demo' and 'test' are supported
  grunt.registerTask('server', function (target) {

    var tasks = [];

    target = target || 'demo';

    tasks.push(
      'clean:main',
      'replace:demo',
      'concurrent:' + target,
      'neuter:app'
    );

    if (target === 'demo') {
      tasks.push('neuter:demo');
    }

    tasks.push(
      'symlink:' + target,
      'connect:' + target,
      'open:' + target,
      'watch'
    );

    grunt.task.run(tasks);

  });

  grunt.registerTask('test', [
    'clean:main',
    'replace',
    'concurrent:test',
    'neuter:app',
    'connect:test',
    'qunit'
  ]);

  grunt.registerTask('build', [
    'clean:main',
    'symlink:demo',
    'replace',
    'useminPrepare',
    'concurrent:dist',
    'neuter',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('publish', [
    'clean:main',
    'build',
    'gh-pages',
    'clean:publish'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
