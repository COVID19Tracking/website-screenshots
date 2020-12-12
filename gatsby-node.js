const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allState {
        nodes {
          state
          slug
          covid19SiteQuaternary
          covid19SiteQuinary
          covid19SiteSecondary
          covid19SiteTertiary
          covid19Site
        }
      }
      allScreenshot {
        nodes {
          url
          tertiary
          secondary
          state
          date
          time: dateChecked(formatString: "h:mm a")
        }
      }
    }
  `)

  result.data.allState.nodes.forEach((state) => {
    const context = {
      state,
      screenshots: result.data.allScreenshot.nodes.filter(
        (screenshot) => screenshot.state === state.state,
      ),
    }
    createPage({
      path: state.slug,
      component: path.resolve(`./src/templates/state.js`),
      context,
    })
  })
}
