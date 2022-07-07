module.exports = {
  src: './src',
  language: 'typescript',
  schema: './schema/schema.graphql',
  customScalars: {
    DateTime: 'string',
  },
  exclude: ['/node_modules/', '/__generated__/'],
};
