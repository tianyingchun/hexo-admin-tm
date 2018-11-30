
var React = require('react')
class SinceWhen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time.fromNow()
    };
  }

  componentDidMount() {
    this._iv = setInterval(this.tick, 5000)
  }

  componentWillUnmount() {
    clearInterval(this._iv)
  }

  tick() {
    if (!this.isMounted()) {
      return clearInterval(this._iv)
    }
    this.setState({ time: this.props.time.fromNow() })
  }

  render() {
    return this.transferPropsTo(<span>{this.props.prefix + this.state.time}</span>)
  }
}

SinceWhen.defaultProps = {
  prefix: ''
};

module.exports = SinceWhen
