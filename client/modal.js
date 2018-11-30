var React = require('react');

class Modal extends React.Component {
  backdrop() {
    return <div className='modal-backdrop in' />;
  }

  modal() {
    var style = { display: 'block' };
    return (
      <div
        className='modal in'
        tabIndex='-1'
        role='dialog'
        aria-hidden='false'
        ref='modal'
        style={style}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.backdrop()}
        {this.modal()}
      </div>
    );
  }
}

module.exports = Modal
