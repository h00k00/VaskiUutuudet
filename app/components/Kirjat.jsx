var React = require('react');
var {Link} = require('react-router');
var Filters = require('Filters');
var apiFinna = require('apiFinna');

var Kirjat = React.createClass({
  handleSearch: function (location) {
    var that = this;
        
//    debugger; //breakpoint
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });
    
    if (apiFinna.getBooks()) {
      that.setState({
        isLoading: false
      });
    } else {
      that.setState({
        isLoading: false,
        errorMessage: 'Error'
      });
    }
  },
  render: function () {
    return (
        < div >
            < Filters onSearch={this.handleSearch}/>
            < h1 className = "text-center page-title" > Kirjat < /h1>
            < p > Example locations to try out! < /p>
            < ol >
                < li >
                    < Link to = '/?location=Turku' > Turku, Finland < /Link>
                < /li>
                < li >
                    < Link to = '/?location=Stockholm' > Stockholm, Sweden < /Link>
                < /li>
            < /ol>
        < /div>
    )
  }
});

module.exports = Kirjat;
                          
                          
                          
                          
                          
                          
                          
                          
    
   
 
