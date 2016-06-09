var React = require('react');
var WeatherMessage = require('WeatherMessage');
var Filters = require('Filters');
var ErrorModal = require('ErrorModal');
var apiFinna = require('apiFinna');

var Aloitus = React.createClass({
  getInitialState: function () {
    return {
      isLoading : false
    };
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;
    
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;
    
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage (){
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    
    function renderError (){
      if (typeof errorMessage == 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }
                                         
    return (
      <div>
        <h1 className="text-center page-title">Vaski uutuudet</h1>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
})
                                         ;

module.exports = Aloitus;
                                                           
                                                           
                                                           
                                                           
                                                           
                                                           
           
       
     
         
       
     
                               
           
       
     
 
     
                      
           
       
     
       
           
       
     
    
     
  
     
                               
           
       
     
    
     
      
       
     

       
     

