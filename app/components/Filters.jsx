var React = require('react');

var Filters = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        switch (this.state.typeOfSubmit) {
            case 'dekkarit':
                this.props.onSearch(location);
                break;
            case 'spefi':
                this.props.onSearch(location);
                break;
            case 'allTypes':
                this.props.onSearch(location);
                break;
        }
        
//        var location = this.refs.location.value;
              
//        if (typeof location == 'string' && location.length > 0) {
//            this.refs.location.value = '';
//            this.props.onSearch(location);
//        }
    },
    submitThrillers: function () {
      this.setState({
        typeOfSubmit: 'dekkarit'
      }, this.refs.form.onFormSubmit);
    },
    submitSpefi: function () {
      this.setState({
        typeOfSubmit: 'spefi'
      }, this.refs.form.onFormSubmit);
    },
    submitAllTypes: function () {
      this.setState({
        typeOfSubmit: 'allTypes'
      }, this.refs.form.onFormSubmit);
    },
    render: function () {
        return (
            <div className="filter-bar">
                <form onSubmit={this.onFormSubmit} ref="form">
                    <div className="row">
                        <div className="columns medium-4 small-2">
                            <input onClick={this.submitThrillers} type="submit" className="button hollow expanded" value="Dekkarit"/>
                        </div>
                        <div className="columns medium-4 small-2">
                            <input onClick={this.submitSpefi} type="submit" className="button hollow expanded" value="Spefi"/>
                        </div>
                        <div className="columns medium-4 small-2">
                            <input onClick={this.submitAllTypes} type="submit" className="button hollow expanded"value="Sekalaiset"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = Filters;
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                                                 
                                 
                                                                 
 
                                 
                                                                 
    
  
