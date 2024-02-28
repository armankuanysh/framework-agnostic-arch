import path from 'path'

const config = {
  webpack: {
    alias: {
      core: path.resolve(__dirname, 'src/core'),
      models: path.resolve(__dirname, 'src/core/models'),
      pages: path.resolve(__dirname, 'src/view/pages'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      components: path.resolve(__dirname, 'src/view/components'),
    },
  },
}

export default config
