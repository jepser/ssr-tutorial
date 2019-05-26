import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Layout from '../layout'
import { Title } from '../global/text'

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Super website</title>
      </Helmet>
      <Title>Welcome to my website!</Title>
      <p><Link to='/about'>Do you know more about me?</Link></p>
    </Layout>
  )
}

export default Home
