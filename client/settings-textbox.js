
var React = require('react')
var PT = require('prop-types')
var api = require('./api')

class SettingsTextbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    }
  }

  componentDidMount() {
    var name = this.props.name
    var defaultValue = this.props.defaultValue
    api.settings().then((settings) => {
      var value;
      if (!settings.options) {
        value = defaultValue
      } else {
        if (!settings.options[name]) {
          value = defaultValue
        } else {
          value = settings.options[name]
        }
      }
      this.setState({ value: value })
    })
  }

  handleChange(e) {
    var name = this.props.name
    var value = e.target.value
    api.setSetting(name, value).then((result) => {
      console.log(result.updated)
      this.setState({
        value: result.settings.options[name]
      });
    });
  }

  render() {
    return (
      <p>
        <b>{this.props.label}:  </b>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </p>
    );
  }
}
SettingsTextbox.propTypes = {
  name: PT.string.isRequired,
  defaultValue: PT.string.isRequired,
  label: PT.string.isRequired
}

module.exports = SettingsTextbox
