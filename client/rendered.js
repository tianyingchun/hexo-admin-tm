const React = require('react')

class Rendered extends React.Component {
  render() {
    return this.transferPropsTo(
      <div className="post-content"
        dangerouslySetInnerHTML={{
          __html: this.props.text || '<h1 class="editor_no-content">There doesn\'t seem to be anything here</h1>'
        }} />)
  }
}

Rendered.propTypes = {
  text: React.PropTypes.string
}

module.exports = Rendered;
