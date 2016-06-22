var React = require('react');
var ResultList = require('ResultList');
var apiFinna = require('apiFinna');

var Items = React.createClass({
    getInitialState: function () {
        return {
            isLoading : false,
            records: undefined,
            title: this.props.params.item,
            items: this.props.params.item
        };
    },
    handleSearch: function() {
        var that = this;
        
       this.setState({
          isLoading: true,
          records: undefined
        });
        
        console.log('handleSearch');

        apiFinna.getBooks(this.state.title).then(function(data) {
          that.setState({
              isLoading: false,
              records: data.records
          });
        }, function(e) {
          that.setState({
              isLoading: false,
              errorMessage: e.message,
              records: undefined
          });
        })
    },
    componentWillReceiveProps: function(nextProps) {
        var that = this;
        
        if (nextProps.params.item == this.state.title) {
            return;
        }
        
        this.setState({
            isLoading: true,
            records: undefined,
            title: nextProps.params.item,
            items: nextProps.params.item
        });

        apiFinna.getBooks(nextProps.params.item).then(function (data) {
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
    componentWillUpdate: function () {
    },
    componentDidMount: function () {
        var that = this;
            
        this.setState({
          isLoading: true,
          records: undefined
        });
        
        apiFinna.getBooks(this.state.title).then(function (data) {
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

        function renderList() {
            if (isLoading) {
                return <h3 className = "text-center" > Haetaan tietoja... < /h3>;
            }
            else if (records) {
                return <ResultList records={records}/>;
            }
        }
    
        return (
            <div>
                < h1 className = "text-center page-title" >
                    {this.state.title}
                </h1>
                {renderList()}
            </div>
        )
    }
});

module.exports = Items;
