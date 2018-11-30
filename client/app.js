
const React = require('react')
const { Link } = require('react-router-dom')

class App extends React.Component {
  render() {
    return <div className="app">
      <div className="app_header">
        <img src="logo.png" className="app_logo" />
        <span className="app_title">Hexo Admin</span>
        <ul className="app_nav">
          <li><Link to="posts">Posts</Link></li>
          <li><Link to="pages">Pages</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="deploy">Deploy</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </div>
      <div className="app_main">
        {this.props.children}
      </div>
    </div>;
  }
}

module.exports = App
