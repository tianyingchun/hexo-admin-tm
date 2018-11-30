
const { HashRouter, Route, Switch } = require('react-router-dom');
const App = require('./app');
const Post = require('./post')
const Posts = require('./posts')
const Page = require('./page')
const Pages = require('./pages')
const About = require('./about')
const Deploy = require('./deploy')
const Settings = require('./settings')
const AuthSetup = require('./auth-setup')

module.exports = () => {
  return (
    <HashRouter>
      <App>
        <Switch>
          <Route name="posts" component={Posts} path="/" />
          <Route name="post" component={Post} path="/posts/:postId" />
          <Route name="page" component={Page} path="/pages/:pageId" />
          <Route name="pages" component={Pages} path="/pages" />
          <Route name="about" component={About} />
          <Route name="deploy" component={Deploy} />
          <Route name="settings" component={Settings} />
          <Route name="auth-setup" component={AuthSetup} />
        </Switch>
      </App>
    </HashRouter>
  );
}
