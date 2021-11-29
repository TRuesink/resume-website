module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.timruesink.com',
    title: 'Tim Ruesink',
    description: 'Learn more about Tim as an engineer, a coder and a person',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
