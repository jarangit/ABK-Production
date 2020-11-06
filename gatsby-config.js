require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `ABK-Store - เครื่องปอกมะพร้าวครบวงจร, เครื่องขูดมะพร้าว, เครื่องคั้นกะทิ, เครื่องกะเทาะเปลือกมะพร้าว`,
    description: `เครื่องปอกมะพร้าวครบวงจร, เครื่องขูดมะพร้าว, เครื่องคั้นกะทิ, เครื่องกะเทาะเปลือกมะพร้าว`,
    author: `@gatsbyjs`,
    images: `https://api.abk-store.com/wp-content/uploads/2020/04/logo.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    //Wp-Grapql
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WordPress`,
        fieldName: `wordPress`,
        url: `https://api.abk-store.com/graphql`,
        // refetchInterval:60
       },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-167493043-3",
        },
      },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
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
        icon: `src/images/logo/logo.PNG`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
