import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals'
import App from './App'
import rootReducer from './store/reducers/rootReducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
  createStore
)

const store = createStoreWithMiddleware(rootReducer)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

reportWebVitals()
