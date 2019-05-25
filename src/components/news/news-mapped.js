import { actions } from '../../modules/news'
import { connect } from 'react-redux'
import News from './news'

const mapStateToProps = (state) => ({
  news: state.news
})

const dispatchToProps = (dispatch) => ({
  addNews: (news) => {
    dispatch(actions.addNews(news))
  }
})

export default connect(mapStateToProps, dispatchToProps)(News)
