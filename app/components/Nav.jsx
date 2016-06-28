import MobileNav from 'react-icons/lib/io/navicon-round';
var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
    getInitialState: function () {
        return {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
    },
    handleResize: function () {
        this.setState({windowWidth: window.innerWidth});
        console.log(this.state.windowWidth);
    },
    componentDidMount: function () {
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function () {
        window.removeEventListener('resize', this.handleResize);
    },
    onSearch: function (e) {
        e.preventDefault;
    
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
    
        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    navigationLinks: function () {
        return (
            <ul className={this.state.mobileNavVisible ? 'mobile-menu' : 'menu'}>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Aloitus</IndexLink></li>
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
        );
    },
    renderMobileNav: function () {
        if(this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    },
    handleNavClick: function () {
        if(!this.state.mobileNavVisible) {
            this.setState({mobileNavVisible: true});
        } else {
            this.setState({mobileNavVisible: false});
        }
    },
    render: function () {
        if (this.state.windowWidth <= 1080){
            console.log('kapea ikkuna');
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
});

module.exports = Nav;
