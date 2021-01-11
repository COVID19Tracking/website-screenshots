const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allState {
        nodes {
          state
          slug
          name
          twitter
        }
      }
      allScreenshot(sort: { fields: date, order: DESC }) {
        nodes {
          url
          tertiary
          secondary
          quaternary
          quinary
          state
          date(formatString: "MMMM D, YYYY")
          time: dateChecked(formatString: "h:mm a")
        }
      }
      allFile {
        nodes {
          childTacoYaml {
            links {
              url
              name
            }
            state
          }
        }
      }
    }
  `)

  result.data.allState.nodes.forEach((state) => {
    const context = {
      state,
      links: result.data.allFile.nodes.find(
        (node) => node.childTacoYaml.state === state.state,
      ),
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
