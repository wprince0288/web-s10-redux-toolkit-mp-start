import './styles/reset.css'
import './styles/styles.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import { Provider } from 'react-redux'
import { store } from './state/store'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
