import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import logo from '../images/project-logo.svg'
import '../style/reset.css'

const Header = styled.header`
  background: #31347a;
  padding: 1rem;
  color: white;
  img {
    width: 150px;
    display: inline-block;
  }
  h1 {
    display: inline-block;
    padding-left: 2rem;
  }
`

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 3rem;
`

export default ({ title, children }) => (
  <>
    <Header>
      <Container>
        <Link to="/">
          <img src={logo} alt="The COVID Tracking Project" />
        </Link>{' '}
        <h1>State Screenshots{title && <>- {title}</>}</h1>
      </Container>
    </Header>
    <main>
      <Container>{children}</Container>
    </main>
  </>
)
