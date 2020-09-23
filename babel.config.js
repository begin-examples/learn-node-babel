module.exports = function(api) {
  api.cache(false)
  return {
    presets: [[
      "@babel/preset-env",
      {targets: {node: true}, modules: 'cjs'}
    ]],
    plugins: [
      "@babel/plugin-proposal-optional-chaining"
    ]
  }
}
