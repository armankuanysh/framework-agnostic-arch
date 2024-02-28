import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Controllers from 'core/controllers'
import Router from './router'
import store from './store'
import './assets/styles/index.scss'

export const controllers = new Controllers()
controllers.bootstrap()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
