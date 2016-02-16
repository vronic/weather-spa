
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure from './store'

const store = configure()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
