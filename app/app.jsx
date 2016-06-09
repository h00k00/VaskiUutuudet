var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Aloitus = require('Aloitus');
var Kirjat = require('Kirjat');
var Elokuvat = require('Elokuvat');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="kirjat" component={Kirjat}/>
      <Route path="elokuvat" component={Elokuvat}/>
      <IndexRoute component={Aloitus}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
                                                                 

                                                                                                                                   
                                                                                                                                   
                                                                                                                                   
                                                                                                                                   
                                                                                                                                   
                                                                                                                                   
                                                                                                                                   
                                                                                                                                   
                                                                              
                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                    