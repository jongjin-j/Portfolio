const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query PageQuery {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve(
        "./src/templates/details.js?__contentFilePath=${node.internal.contentFilePath}"
      ),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
