import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
import Main from './Main/Main.js'
import Ancestry from './Ancestry/Main'
import My404 from './My404/My404'

// const history = createBrowserHistory()

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/ancestry' component={Ancestry} />
      <Route path='*' component={My404} />
    </Switch>
  </Router>
)

export default Routes
