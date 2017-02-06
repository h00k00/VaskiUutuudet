import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Aloitus from 'Aloitus';
import Items from 'Items';

// load foundation
// require('style!css!foundation-sites/dist/foundation.min.css')
// $(document).foundation();

// App css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route name="kirjat" path="items/:item" component={Items}/>
      <Route name="ekirjat" path="items/:item" component={Items}/>
      <Route name="spefi" path="items/:item" component={Items}/>
      <Route name="sarjakuvat" path="items/:item" component={Items}/>
      <Route name="rikos" path="items/:item" component={Items}/>
      <Route name="jannitys" path="items/:item" component={Items}/>
      <IndexRoute component={Aloitus}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
