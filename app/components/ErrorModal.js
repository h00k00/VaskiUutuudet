import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
  getDefaultProps() {
    return {
      title: 'Error'
    };
  }
  componentDidMount() {
    let {title, message} = this.props;
    let modalMarkUp = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">OK</button>
        </p>
      </div>
    )

    let $modal = $(ReactDOMServer.renderToString(modalMarkUp));
    $(ReactDOM.findDOMNode(this)).html($modal)

    let modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {

    return (
      <div>
      </div>
    )

  }
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

export default ErrorModal;
