import React, { Component, PropTypes }  from 'react';
import ErrorModal from 'ErrorModal';
import apiFinna from 'apiFinna';

class Aloitus extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading : false,
      };
  }
  componentDidMount() {
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  render() {
    let {location, temp, errorMessage} = this.state;
    const isLoading = this.props.isLoading;

    function renderMessage (){
      if (isLoading) {
        return <h3 className="text-center">Haetaan tietoja...</h3>;
      } else if (temp && location) {
        return <p></p>;
      }
    }

    function renderError (){
      if (typeof errorMessage == 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1>Vaski uutuudet</h1>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}

export default Aloitus;
