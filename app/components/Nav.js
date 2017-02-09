import MobileNav from 'react-icons/lib/io/navicon-round';
import React, { Component, PropTypes } from 'react';
import {Link,IndexLink}from 'react-router';

class NavBar extends Component {
  render() {
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
                Vaski uutuudet
              </div>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
              <ul className="nav navbar-nav">
                  <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Aloitus</IndexLink>
                  </li>
                  <li><Link to="items/Kirjat"
                          activeClassName="active"
                          activeStyle={{fontWeight: 'bold'}}>
                          Kirjat</Link>
                  </li>
                  <li><Link to="items/eKirjat"
                          activeClassName="active"
                          activeStyle={{fontWeight: 'bold'}}>
                          eKirjat</Link>
                  </li>
                  <li><Link to="items/Spefi"
                          activeClassName="active"
                          activeStyle={{fontWeight: 'bold'}}>
                          Spefi</Link>
                  </li>
                  <li><Link to="items/Sarjakuvat"
                          activeClassName="active"
                          activeStyle={{fontWeight: 'bold'}}>
                          Sarjakuvat</Link>
                  </li>
                  <li><Link to="items/Rikos"
                          activeClassName="active"
                          activeStyle={{fontWeight: 'bold'}}>
                          Rikos</Link>
                  </li>
                  <li><Link to="items/Jännitys"
                          activeClassName="active"
                          activeStyle={{fontWeight: 'bold'}}>
                          Jännitys</Link>
                  </li>
              </ul>
            </div>
          </div>
          </nav>
      );
  }
}

class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
          windowWidth: window.innerWidth,
          // mobileNavVisible: false
      };
      this.onChange = this.onChange.bind(this);
      this.handleResize = this.handleResize.bind(this);
    }
    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    onChange(state) {
      this.setState(state);
    }
    onSearch(e) {
        e.preventDefault;

        let location = this.refs.search.value;
        let encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    }
    render() {
      return (
        <NavBar/>
      )
    }
};

export default Nav;
