module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key': process.env.CONTENTSTACK_API_KEY,
        'access_token': process.env.CONTENTSTACK_ACCESS_TOKEN,
        'environment': process.env.CONTENTSTACK_ENVIRONMENT,
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}
