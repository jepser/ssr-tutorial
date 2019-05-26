import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 24px;
  background-color: #111;
`

const Anchor = styled(Link)`
  color: white;
`

const Header = () => {
  return (
    <List>
      <li>
        <Anchor to='/'>Home</Anchor>
      </li>
      <li>
        <Anchor to='/about'>About</Anchor>
      </li>
      <li>
        <Anchor to='/news'>News</Anchor>
      </li>
    </List>
  )
}

export default Header
