var React = require('react');
var Modal = require('./modal');

class Confirm extends React.Component {
  abort() {
    return this.promise.reject();
  }

  confirm() {
    return this.promise.resolve();
  }

  componentDidMount() {
    this.promise = new $.Deferred();
    return this.refs.confirm.getDOMNode().focus();
  }

  render() {
    var modalBody;
    if (this.props.description) {
      modalBody = (
        <div className='modal-body'>
          {this.props.description}
        </div>
      );
    }

    return (
      <Modal>
        <div className='modal-header'>
          <h4 className='modal-title'>
            {this.props.message}
          </h4>
        </div>
        {modalBody}
        <div className='modal-footer'>
          <div className='text-right'>
            <button
              role='abort'
              type='button'
              className='btn btn-default'
              onClick={this.abort}
            >
              {this.props.abortLabel}
            </button>
            {' '}
            <button
              role='confirm'
              type='button'
              className='btn btn-primary'
              ref='confirm'
              onClick={this.confirm}
            >
              {this.props.confirmLabel}
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
Confirm.defaultProps = {
  confirmLabel: 'OK',
  abortLabel: 'Cancel',
}
module.exports = Confirm
