import React, { Component, PropTypes } from 'react';

class AuthorWrapper extends Component {
    render() {
        if (this.props.data)
            return <h4 className="list-group-item-heading title">{this.props.data[0].name}</h4>
        else
            return <h4></h4>
    }
};

class BookRow  extends Component  {
    render() {
        let imageSrc = '';
        if (this.props.records.images != undefined) {
            imageSrc = 'https://api.finna.fi' + this.props.records.images[0];
        }
        let itemUrl = 'https://vaski.finna.fi/Record/' + this.props.records.id;
        return (
          <div className="container">
            <li className="list-group-item">
              <div className="image-container">
                <img src={imageSrc} className="cover"/>
              </div>
              <div className="content-container">
                <AuthorWrapper data = {this.props.records.nonPresenterAuthors}/>
                <a target="_blank" href={itemUrl} className="list-group-item-text text">
                    {this.props.records.title}
                </a>
              </div>
            </li>
          </div>
        );
  }
};

class BookTable  extends Component  {
    render() {
        let rows = [];
        let lastCategory = null;

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

        let that = this;
        this.props.records.forEach(function(records) {
            if (that.props.finnishOnly && !checkLanguage(records)) {
                return;
            }
            rows.push(<BookRow records={records} key={records.id} />);
        });
        return (
          <div>
            <ul className="media-list">
            {rows}
            </ul>
          </div>
        );
    }
};

class FilterBar  extends Component  {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
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
      this.handleUserInput = this.handleUserInput.bind(this);
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
