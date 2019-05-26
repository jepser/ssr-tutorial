import 'isomorphic-fetch'
import React, { useEffect } from 'react'
import Layout from '../layout'

const Article = ({ title, description }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}

const News = ({ news, addNews }) => {
  useEffect(() => {
    fetch('https://5ce9a905a8c1ee0014c7065b.mockapi.io/news')
      .then(r => r.json())
      .then(r => {
        addNews(r)
      })
  }, [])

  return (
    <Layout>
      <h1>News</h1>
      {news.map(article => <Article key={article.id} {...article} />)}
    </Layout>
  )
}

export default News
