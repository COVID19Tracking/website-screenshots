import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'

const order = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary']

const titleCase = (name) => name.charAt(0).toUpperCase() + name.slice(1)

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  td {
    border-top: 1px solid black;
    &.no-border {
      border-top: none;
    }
  }
  ul {
    list-style-type: none;
    li {
      display: inline-block;
      margin-right: 1rem;
    }
    a {
      color: black;
    }
  }
`

const Date = styled.td`
  width: 150px;
`

export default ({ pageContext }) => {
  const allScreenshots = {}
  pageContext.screenshots.forEach((screenshot) => {
    if (typeof allScreenshots[screenshot.date] === 'undefined') {
      allScreenshots[screenshot.date] = {
        date: screenshot.date,
        types: {},
      }
    }
    if (
      typeof allScreenshots[screenshot.date].types[screenshot.type] ===
      'undefined'
    ) {
      allScreenshots[screenshot.date].types[screenshot.type] = []
    }
    allScreenshots[screenshot.date].types[screenshot.type].push(screenshot)
  })
  Object.keys(allScreenshots).forEach((date) => {
    allScreenshots[date].types = Object.values(allScreenshots[date].types).sort(
      (a, b) => {
        const aType = a[0].type
        const bType = b[0].type
        if (order.indexOf(aType) === -1) {
          return 1
        }
        return order.indexOf(aType) < order.indexOf(bType) ? -1 : 1
      },
    )
  })

  return (
    <Layout>
      <h2>{pageContext.state.name}</h2>
      <p>
        <a
          href={`https://covidtracking.com/data/state/${pageContext.state.slug}`}
        >
          View state information
        </a>
      </p>
      {pageContext.links && (
        <ul>
          {pageContext.state.twitter && (
            <li>
              <a href={`https://twitter.com/${pageContext.state.twitter}`}>
                Official Twitter account
              </a>
            </li>
          )}
          {pageContext.links.childTacoYaml.links.map((link) => (
            <li>
              <strong>
                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}:
              </strong>{' '}
              {link.url.search('http') > 0 ? (
                <>
                  We dynamically generate the URL, based on this pattern:
                  <br />
                  <code>{link.url}</code>
                </>
              ) : (
                <>
                  <a href={link.url} target="_blank">
                    {link.url}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Source</th>
            <th>Screenshots</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(allScreenshots).map((date) => (
            <>
              <tr>
                <td>
                  <strong>{date.date}</strong>
                </td>
                <td>{titleCase(date.types[0][0].type)}</td>
                <td>
                  <ul>
                    {date.types[0].map((screenshot) => (
                      <li>
                        <a href={screenshot.s3Url} target="_blank">
                          {screenshot.time}
                        </a>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              {date.types.splice(1, date.types.length).map((type) => (
                <tr>
                  <td className="no-border" />
                  <td>
                    {titleCase(
                      type[0].type.replace(':', ' ').replace(' source', ''),
                    )}
                    {type[0].isManual && <> (manual)</>}
                  </td>
                  <td>
                    <ul>
                      {type.map((screenshot) => (
                        <li>
                          <a href={screenshot.s3Url} target="_blank">
                            {screenshot.time}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </Table>
    </Layout>
  )
}
