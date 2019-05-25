import React from 'react'
import { renderToString } from 'react-dom/server'

import App from '../components/app'

export default renderToString(<App />)
