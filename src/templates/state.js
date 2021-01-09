import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout'

const Table = styled.table`
  width: 100%;
  tr {
    border-bottom: 1px solid black;
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
        primary: [],
        secondary: [],
        tertiary: [],
      }
    }
    if (screenshot.tertiary) {
      allScreenshots[screenshot.date].tertiary.push(screenshot)
      return
    }
    if (screenshot.secondary) {
      allScreenshots[screenshot.date].secondary.push(screenshot)
      return
    }
    allScreenshots[screenshot.date].primary.push(screenshot)
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
            <th>Primary</th>
            <th>Secondary</th>
            <th>Tertiary</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(allScreenshots).map((screenshot) => (
            <tr>
              <Date>{screenshot.date}</Date>
              <td>
                <ul>
                  {screenshot.primary.map((item) => (
                    <li>
                      <a href={item.url} target="_blank">
                        {item.time}
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {screenshot.secondary.map((item) => (
                    <li>
                      <a href={item.url} target="_blank">
                        {item.time}
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {screenshot.tertiary.map((item) => (
                    <li>
                      <a href={item.url} target="_blank">
                        {item.time}
                      </a>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  )
}
