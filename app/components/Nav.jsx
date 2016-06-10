var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault;
    
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);
    
    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Vaski uutuudet</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Aloitus</IndexLink></li>
            <li><Link to="kirjat" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Kirjat</Link></li>
            <li><Link to="elokuvat" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Elokuvat</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
                                                                                          
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                            
                       
                                             
                                             
                                             
                                             
                                             
                                             
                                             
                            
                 
       

  
