import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout'
import { Title } from '../global/text'

const Home = () => {
  return (
    <Layout>
      <Title>Welcome to my website!</Title>
      <p><Link to='/about'>Do you know more about me?</Link></p>
    </Layout>
  )
}

export default Home
