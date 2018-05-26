module.exports = {
  siteMetadata: {
    title: "BH0's Blog"
  },
  pathPrefix: `/bh0-gatsby-blog`, 
  plugins: [
    'gatsby-plugin-react-helmet', 
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `${__dirname}/src/pages`, 
        name: `pages` 
      }
    }, 
    `gatsby-transformer-remark` 
    ],
} 


