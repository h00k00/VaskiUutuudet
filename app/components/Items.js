import React, { Component, PropTypes } from 'react';
import ResultList from 'ResultList';
import apiFinna from 'apiFinna';

class Items extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading : false,
        records: undefined,
        title: this.props.params.item,
        items: this.props.params.item
      };
  }
    handleSearch() {
        let that = this;

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
    }
    componentWillReceiveProps(nextProps) {
        let that = this;

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
    }
    componentWillUpdate() {
    }
    componentDidMount() {
        let that = this;

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
    }
    render() {
        let {isLoading, records} = this.state;

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
}

export default Items;
