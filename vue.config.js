module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://swapi.dev/',
        changeOrigin: true
      }
    }
  }
}
