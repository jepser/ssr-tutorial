import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../layout'

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to my website!</h1>
      <p><Link to='/about'>Do you know more about me?</Link></p>
    </Layout>
  )
}

export default Home
