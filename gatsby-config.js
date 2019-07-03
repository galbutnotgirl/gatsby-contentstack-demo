module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt959fc26d90dbf5c3',
        'access_token':'cs81e2fcbf04337cba65a62c1e',
        'environment':'preview'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
