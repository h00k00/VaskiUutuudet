var React = require('react');

var AuthorWrapper = React.createClass({
    render: function () {
        if (this.props.data)
            return <div>{this.props.data[0].name}</div>
        else
            return <div></div>
    }
});

var BookRow = React.createClass({
    render: function() {
        var imageSrc = '';
        if (this.props.records.images != undefined) {
            imageSrc = 'https://api.finna.fi' + this.props.records.images[0];
        }
        var itemUrl = 'https://vaski.finna.fi/Record/' + this.props.records.id;
        return (
          <tr>
                <td><img src={imageSrc} className="cover"/></td>
                <td className="book-author">
                <AuthorWrapper data = {this.props.records.nonPresenterAuthors}/>
                </td>
                <td className="book-title">
                    <a target="_blank" href={itemUrl}>
                        {this.props.records.title}
                    </a>
                </td>
          </tr>
        );
  }
});

var BookTable = React.createClass({
    // getInitialState: function () {
    // },
    // componentWillReceiveProps: function(nextProps) {
    // },
    // componentDidMount: function () {
    // },
    render: function() {
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
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th><h3>Kirjailija</h3></th>
                        <th><h3>Teos</h3></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var FilterBar = React.createClass({
    handleChange: function () {
        this.props.onUserInput(
            this.refs.finnishOnly.checked
        )
    },
    render: function() {
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
});

var ResultList = React.createClass({
    getInitialState: function () {
        return {
            finnishOnly: false,
        };
    },
    componentWillReceiveProps: function(nextProps) {
    },
    componentDidMount: function () {
    },
    handleUserInput: function (finnishOnly) {
        this.setState({
            finnishOnly: finnishOnly,
        });
    },
    render: function() {
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
});

module.exports = ResultList;
