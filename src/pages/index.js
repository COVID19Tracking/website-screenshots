import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'

const List = styled.ul`
  list-style-type: none;
  font-size: 1.5rem;
  columns: 3;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      allState(sort: { fields: name }) {
        nodes {
          name
          slug
        }
      }
    }
  `)
  return (
    <Layout>
      <style>{`body: margin: 0;`}</style>
      <List>
        {data.allState.nodes.map((state) => (
          <li key={state.name}>
            <Link to={`/${state.slug}`}>{state.name}</Link>
          </li>
        ))}
      </List>
    </Layout>
  )
}
