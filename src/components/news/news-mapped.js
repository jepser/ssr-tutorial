import { actions } from '../../modules/news'
import { connect } from 'react-redux'
import News from './news'

const mapStateToProps = (state) => ({
  news: state.news
})

const dispatchToProps = (dispatch) => ({
  loadNews: () => {
    dispatch(actions.loadNews())
  }
})

export default connect(mapStateToProps, dispatchToProps)(News)
