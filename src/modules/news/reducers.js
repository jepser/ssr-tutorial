import { ADD_NEWS } from './types'

const initialState = []
const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_NEWS:
      return payload.news
    default:
      return state
  }
}
export default reducer
