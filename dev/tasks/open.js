module.exports = {
  demo: {
    path: 'http://localhost:<%= connect.demo.options.port %>',
     app: 'Google Chrome'
  },
  test: {
    path: 'http://localhost:<%= connect.test.options.port %>',
     app: 'Google Chrome'
  }
};
