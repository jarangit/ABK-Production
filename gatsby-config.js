module.exports = {
  siteMetadata: {
    title: `ABK-Store`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    //Wp-Grapql
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WordPress`,
        fieldName: `wordPress`,
<<<<<<< HEAD
        url: `http://localhost/Project/ABK/www/graphql`,
=======
        url: `http://api.abk-store.com/graphql`,
>>>>>>> 1b9d6d2b8c513352dd8e406a85ab1def7405bd76
        // refetchInterval:60
       },
      },
      
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
