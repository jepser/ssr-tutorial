import React from 'react'
import Header from '../header'
import GlobalStyles from '../global'
import styled from 'styled-components'

const Container = styled.div`
  padding: 24px;
`

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default MainLayout
