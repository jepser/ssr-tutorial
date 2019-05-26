import { ADD_NEWS } from './types'

const addNews = (news) => {
  return {
    type: ADD_NEWS,
    payload: {
      news
    }
  }
}

export default {
  addNews
}
