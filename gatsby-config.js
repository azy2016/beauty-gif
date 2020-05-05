/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `妹子gif`,
    description: `一个专注收集妹子gif图片的网站。`,
    author: `3000`,
    siteUrl: `https://beauty.like-gif.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `妹子gif`,
        short_name: `妹子gif`,
        start_url: `/`,
        background_color: `#e74291`,
        theme_color: `#e74291`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-baidu-analytics`,
      options: {
        // baidu analytics siteId
        siteId: "32c2baf043674b566784329e6663db90",
        // Put analytics script in the head instead of the body [default:false]
        head: false,
      },
    },
  ],
}
