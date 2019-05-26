import Home from './components/home'
import About from './components/about'
import News from './components/news'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/news',
    component: News
  }
]
