import './index.less';
import { hot } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component<any, any> {
  public render() {
    return (
      <HashRouter>
        <div className="app">
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
            {this.props.routes}
          </div>
        </div>
      </HashRouter>
    );
  }
}
(async () => {
  console.log('You have async support if you read this instead of "ReferenceError: regeneratorRuntime is not defined" error.');
})();

export default hot(module)(App) as any;
