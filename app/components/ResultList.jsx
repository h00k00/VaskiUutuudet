import React, { Component, PropTypes } from 'react';

class AuthorWrapper extends Component {
    render() {
        if (this.props.data)
            return <div>{this.props.data[0].name}</div>
        else
            return <div></div>
    }
};

class BookRow  extends Component  {
    render() {
        var imageSrc = '';
        if (this.props.records.images != undefined) {
            imageSrc = 'https://api.finna.fi' + this.props.records.images[0];
        }
        var itemUrl = 'https://vaski.finna.fi/Record/' + this.props.records.id;
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={imageSrc} className="cover"/>
              </div>
              <div className="col-md-3">
                <AuthorWrapper data = {this.props.records.nonPresenterAuthors}/>
              </div>
              <div className="col-md-3">
                <a target="_blank" href={itemUrl}>
                    {this.props.records.title}
                </a>
              </div>
            </div>
          </div>
        );
  }
};

class BookTable  extends Component  {
    // getInitialState () {
    // }
    // componentWillReceiveProps(nextProps) {
    // }
    // componentDidMount () {
    // }
    render() {
        var rows = [];
        var lastCategory = null;

        function checkLanguage(value) {
            return value.languages[0] == 'fin';
        }

        function checkCategory(category, value) {
            if (value.subjects != undefined) {
                return value.subjects.indexOf(category) != -1
            } else
            {
                return false;
            }
        }

        var that = this;
        this.props.records.forEach(function(records) {
            if (that.props.finnishOnly && !checkLanguage(records)) {
                return;
            }
            rows.push(<BookRow records={records} key={records.id} />);
        });
        return (
          <div>
            <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3"><h3>Kirjailija</h3></div>
                        <div className="col-md-3"><h3>Teos</h3></div>
                    </div>
            </div>
            {rows}
            </div>
        );
    }
};

class FilterBar  extends Component  {
    handleChange () {
        this.props.onUserInput(
            this.refs.finnishOnly.checked
        )
    }
    render() {
        return (
            <form>
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.finnishOnly}
                        ref="finnishOnly"
                        onChange={this.handleChange}
                        id="language"
                    />
                    <span className="checkbox-text">Vain suomenkieliset</span>
                </p>
            </form>
        );
    }
};

class ResultList  extends Component  {
  constructor(props) {
    super(props);
      this.state = {
        finnishOnly: false,
      };
  }
    componentWillReceiveProps(nextProps) {
    }
    componentDidMount () {
    }
    handleUserInput (finnishOnly) {
        this.setState({
            finnishOnly: finnishOnly,
        });
    }
    render() {
        return (
            <div id="results">
                < FilterBar
                    finnishOnly = {this.state.finnishOnly}
                    onUserInput = {this.handleUserInput}/>
                <BookTable
                    records = {this.props.records}
                    finnishOnly = {this.state.finnishOnly}/>
            </div>
        );
    }
};

export default ResultList;
