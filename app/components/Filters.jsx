var React = require('react');

var Filters = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        switch (this.state.typeOfSubmit) {
            case 'kaikki':
                this.props.onSearch();
                break;
            case 'spefi':
                this.props.onSearch();
                break;
            case 'suomi':
                this.props.filterResults();
                break;
        }
    },
    submitAll: function () {
      this.setState({
        typeOfSubmit: 'kaikki'
      }, this.refs.form.onFormSubmit);
    },
    submitSpefi: function () {
      this.setState({
        typeOfSubmit: 'spefi'
      }, this.refs.form.onFormSubmit);
    },
    submitFinnish: function () {
      this.setState({
        typeOfSubmit: 'suomi'
      }, this.refs.form.onFormSubmit);
    },
    render: function () {
        return (
            <div className="filter-bar">
                <form onSubmit={this.onFormSubmit} ref="form">
                    <div className="row">
                        <div className="columns medium-4 small-2">
                            <input onClick={this.submitAll} type="submit" className="button hollow expanded" value="Kaikki"/>
                        </div>
                        <div className="columns medium-4 small-2">
                            <input onClick={this.submitSpefi} type="submit" className="button hollow expanded" value="Spefi"/>
                        </div>
                        <div className="columns medium-4 small-2">
                            <input onClick={this.submitFinnish} type="submit" className="button hollow expanded"value="Vain suomenkieliset"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Filters;
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                 
                                                                 
 
                                 
                                                                 
    
  
