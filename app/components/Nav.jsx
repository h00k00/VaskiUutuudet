import MobileNav from 'react-icons/lib/io/navicon-round';
import React, { Component, PropTypes } from 'react';
import {Link,IndexLink}from 'react-router';

class Nav extends Component {
    constructor(props) {
      super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
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
    onSearch(e) {
        e.preventDefault;

        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    }
    navigationLinks() {
        return (
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
              <div className="navbar-brand">
                Vaski uutuudet
              </div>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              </div>
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
            </nav>
        );
    }
    renderMobileNav() {
        if(this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    }
    handleNavClick() {
        if(!this.state.mobileNavVisible) {
            this.setState({mobileNavVisible: true});
        } else {
            this.setState({mobileNavVisible: false});
        }
    }
    render() {
        if (this.state.windowWidth <= 1080){
            return (
                <div>
                    <div className = "top-bar" >
                        < div className = "top-bar-left menu-text">
                                    Vaski uutuudet
                        </div>
                        <p onClick={this.handleNavClick}>
                            <MobileNav className="top-bar-right"/>
                        </p>
                    </div>
                    {this.renderMobileNav()}
                </div>
            );
        } else {
            return (
                <div className = "top-bar" >
                    < div className = "top-bar-left menu-text" >
                        Vaski uutuudet
                    </div>
                    < div className = "top-bar-left" >
                        {this.navigationLinks()}
                    </div>
                </div>
            );
        }
    }
};

export default Nav;
