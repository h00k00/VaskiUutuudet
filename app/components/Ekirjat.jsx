var React = require('react');
var Filters = require('Filters');
var ResultList = require('ResultList');
var apiFinna = require('apiFinna');

var Ekirjat = React.createClass({
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
    
    apiFinna.getBooks('ebook').then(function (data) {
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
    filterResults: function () {
        var that = this;
        var {isLoading, records} = this.state;
        
        function checkLanguage(value) {
            return value.languages[0] == 'fin';
        }
          
        records = records.filter(checkLanguage);
        that.setState({
            isLoading: false,
            records: records
        });
    },
  componentDidMount: function () {
    var that = this;
        
    this.setState({
      isLoading: true,
      records: undefined
    });
    
    apiFinna.getBooks('ebook').then(function (data) {
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
            < Filters onSearch={this.handleSearch} filterResults={
                this.filterResults
            }/>
            <h1 className = "text-center page-title" >eKirjat</h1>
            {renderList()}
        < /div>
    )
  }
});

module.exports = Ekirjat;

                               
                               
                               
                               

                               
                               
                               
                               
                               
                               
                      

                               
                               
                               
                               
                               
                               
                               

                              
                               

