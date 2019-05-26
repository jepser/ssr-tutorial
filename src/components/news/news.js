import React, { useEffect } from 'react'
import styled from 'styled-components'

import Layout from '../layout'
import { Title } from '../global/text'

const Wrap = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ccc;
`

const Article = ({ title, description }) => {
  return (
    <Wrap>
      <Title as='h2'>{title}</Title>
      <p>{description}</p>
    </Wrap>
  )
}

const News = ({ news, loadNews }) => {
  useEffect(() => {
    loadNews()
  }, [])

  return (
    <Layout>
      <Title>News</Title>
      {news.map(article => <Article key={article.id} {...article} />)}
    </Layout>
  )
}

export default News
