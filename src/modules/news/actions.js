/* globals fetch */
import 'isomorphic-fetch'
import { ADD_NEWS, FETCH_ERROR } from './types'

const fetchNews = () => fetch('https://5ce9a905a8c1ee0014c7065b.mockapi.io/news').then(r => r.json())

const addNews = (news) => {
  return {
    type: ADD_NEWS,
    payload: {
      news
    }
  }
}

const error = () => {
  return {
    type: FETCH_ERROR
  }
}

const loadNews = () => {
  return dispatch => fetchNews()
    .then(r => dispatch(addNews(r)))
    .catch(r => dispatch(error()))
}

export default {
  addNews,
  loadNews
}
