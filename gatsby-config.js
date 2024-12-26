module.exports = {
  siteMetadata: {
    title: "Portfolio",
    contact: "jjjung3571@gmail.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
