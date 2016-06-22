var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Aloitus = require('Aloitus');
var Items = require('Items');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route name="kirjat" path="items/:item" component={Items}/>
      <Route name="ekirjat" path="items/:item" component={Items}/>
      <Route name="spefi" path="items/:item" component={Items}/>
      <Route name="sarjakuvat" path="items/:item" component={Items}/>
      <IndexRoute component={Aloitus}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
                                                                                                                                                                                                                                                                                                                                                                          