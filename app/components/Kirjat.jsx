var React = require('react');
var {Link} = require('react-router');
var Filters = require('Filters');
var ResultList = require('ResultList');
var apiFinna = require('apiFinna');

var Kirjat = React.createClass({
  getInitialState: function () {
    return {
      isLoading : false,
      records: undefined
    };
  },
  handleSearch: function () {
    var that = this;
        
//    debugger; //breakpoint
    this.setState({
      isLoading: true,
      records: undefined
    });
    
    apiFinna.getBooks().then(function (data) {
      that.setState({
        isLoading: false,
        records: data.records
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message,
        records: undefined
      });
    })
  },
  render: function () {
    var {isLoading, records} = this.state;

    function renderList (){
      if (isLoading) {
        return <h3 className="text-center">Haetaan tietoja...</h3>;
      } else if (records) {
        return <ResultList records={records}/>;
      }
    }
    
    return (
        < div >
            < Filters onSearch={this.handleSearch}/>
            < h1 className = "text-center page-title" > Kirjat < /h1>
            {renderList()}
        < /div>
    )
  }
});

module.exports = Kirjat;
                          
                          
                          
                          
                          
                          
                          
                          
    
   
 
