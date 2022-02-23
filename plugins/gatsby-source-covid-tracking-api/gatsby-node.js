const fs = require('fs-extra')
const crypto = require('crypto')
const slugify = require('slugify')

exports.sourceNodes = async (
  { actions, createNodeId, reporter },
  configOptions,
) => {
  const { createNode } = actions
  const { file, type, slug } = configOptions
  const start = new Date()
  try {
    fs.statSync(file)
  } catch {
    reporter.error(
      `There is no file ${file}. 
    
Make sure to run "npm run setup" to clone the most recent version of the COVID API files.`,
    )
    return
  }

  const items = await fs.readJson(file)
  items.forEach((item, index) => {
    if (slug) {
      item.slug = slugify(item[slug], { lower: true })
    }
    const digest = crypto
      .createHash('md5')
      .update(JSON.stringify(item))
      .digest('hex')

    if (type === 'screenshot') {
      item.s3Url = item.url.replace(
        'https://covidtracking.com/screenshots/',
        'https://github.com/COVID19Tracking/screenshot-archive/tree/main/state_screenshots/',
      )
    }

    const nodeTemplate = {
      id: createNodeId(`${type}.${index}`),
      children: [],
      parent: null,
      internal: {
        type: type,
        contentDigest: digest,
      },
    }

    createNode({ ...item, ...nodeTemplate })
  })
  const end = new Date()
  reporter.success(
    `Created ${items.length} ${type} nodes in ${
      (end.getTime() - start.getTime()) / 1000
    }s`,
  )
}
