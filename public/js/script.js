'use strict'

console.log('Hello. Scripts are running...')

import React from 'react'
import {render} from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Nav from './components/nav.js'
import Welcome from './components/welcome.js'
import NotFound from './components/notfound.js'

let $container = document.getElementById('renderReact');

render((
  <Router history={browserHistory}>
    <Route path="/" component={Nav}>
      <IndexRoute component={Welcome} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), $container);
