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
    <Layout title={pageContext.state.name}>
      <p>
        <a
          href={`https://covidtracking.com/data/state/${pageContext.state.slug}`}
        >
          View state information
        </a>
      </p>
      <ul>
        {pageContext.state.covid19Site && (
          <li>
            Primary:{' '}
            <a href={pageContext.state.covid19Site} target="_blank">
              {pageContext.state.covid19Site}
            </a>
          </li>
        )}
        {pageContext.state.covid19SiteSecondary && (
          <li>
            Secondary:{' '}
            <a href={pageContext.state.covid19SiteSecondary} target="_blank">
              {pageContext.state.covid19SiteSecondary}
            </a>
          </li>
        )}
        {pageContext.state.covid19SiteTertiary && (
          <li>
            Tertiary:{' '}
            <a href={pageContext.state.covid19SiteTertiary} target="_blank">
              {pageContext.state.covid19SiteTertiary}
            </a>
          </li>
        )}
        {pageContext.state.covid19SiteQuaternary && (
          <li>
            Quaternary:{' '}
            <a href={pageContext.state.covid19SiteQuaternary} target="_blank">
              {pageContext.state.covid19SiteQuaternary}
            </a>
          </li>
        )}
        {pageContext.state.covid19SiteQuinary && (
          <li>
            Quinary:{' '}
            <a href={pageContext.state.covid19SiteQuinary} target="_blank">
              {pageContext.state.covid19SiteQuinary}
            </a>
          </li>
        )}
      </ul>
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
          {Object.values(allScreenshots)
            .sort((a, b) => (a.date < b.date ? 1 : -1))
            .map((screenshot) => (
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
