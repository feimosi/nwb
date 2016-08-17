module.exports = {
  plugins: [
    [require('@insin/babel-plugin-react-transform').default, {
      transforms: [
        {
          transform: require.resolve('react-transform-hmr'),
          imports: ['react'],
          locals: ['module']
        },
        {
          transform: require.resolve('react-transform-catch-errors'),
          imports: ['react', require.resolve('redbox-noreact')]
        }
      ]
    }]
  ]
}
