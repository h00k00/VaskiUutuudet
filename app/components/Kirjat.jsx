var React = require('react');
var {Link} = require('react-router');
var Filters = require('Filters');
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
    
    if (apiFinna.getBooks()) {
      that.setState({
        isLoading: false,
        records: result
      });
    } else {
      that.setState({
        isLoading: false,
        errorMessage: 'Error',
        records: undefined
      });
    }
  },
  render: function () {
    var {isLoading, records} = this.state;

    if (records) {
        for (var index = 0; index < records.length; ++index) {
            console.log(records[index].nonPresenterAuthors[0].name +
                ': ' + records[index].title);
        }
    }

    
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
                          
                          
                          
                          
                          
                          
                          
                          
    
   
 
