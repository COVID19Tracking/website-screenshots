module.exports = {
  siteMetadata: {
    title: 'COVID Tracking Project Screenshots',
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-no-javascript',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'screenshotConfig',
        path: `${__dirname}/_screenshots/configs/taco`,
      },
    },
    {
      resolve: `gatsby-source-covid-tracking-api`,
      options: {
        type: `screenshot`,
        file: `${__dirname}/_data/screenshots.json`,
      },
    },
    {
      resolve: `gatsby-source-covid-tracking-api`,
      options: {
        type: `state`,
        slug: 'name',
        file: `${__dirname}/_data/states.json`,
      },
    },
  ],
}
