import React from 'react'
import ReactDOM from 'react-dom'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect
// } from 'react-router-dom'
import Routes from './Containers/Routes'
// import Main from './Containers/Main/Main'
// import Ancestry from './Containers/Ancestry/Main'
// import My404 from './Containers/My404/My404'
import './app.scss'

ReactDOM.render(
  // <Router>
  //   <Switch>
  //     <Route path='/' exact component={Main} />
  //     <Route path='/ancestry' component={Ancestry} />
  //     <Route component={My404} />
  //     <Redirect from='*' to='/lost' />
  //   </Switch>
  // </Router>,
  <Routes />,
  document.getElementById('root')
  )
