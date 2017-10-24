module.exports = {
  // proxy all requests starting with /api to jsonplaceholder
  '/api': {
    target: 'http://localhost:3030',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api'
    }
  }
}
