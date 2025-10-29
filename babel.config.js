module.exports = {
  presets: [
    ['@babel/preset-env', { 
      targets: { node: 'current' },
      modules: 'auto'
    }]
  ],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: {
        '#roots': './'
      }
    }]
  ]
};
