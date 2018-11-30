import { Route, Switch } from 'react-router-dom';
import { Post } from './Post';
import { Posts } from './Posts';
import { Page } from './Page';
import { Pages } from './Pages';
import { About } from './About';
import { Deploy } from './Deploy';
import { Settings } from './Settings';
import { AuthSetup } from './AuthSetup';

export default () => {
  return (
    <Switch>
      <Route name="post" render={() => <Post />} path="/posts/:postId" />
      <Route name="page" render={() => <Page />} path="/pages/:pageId" />
      <Route name="pages" render={() => <Pages />} path="/pages" />
      <Route name="about" render={() => <About />} path="/about" />
      <Route name="deploy" render={() => <Deploy />} path="/deploy" />
      <Route name="settings" render={() => <Settings />} path="/settings" />
      <Route name="auth-setup" render={() => <AuthSetup />} path="/auth-setup" />
      <Route name="posts" render={() => <Posts />} path="/" />
    </Switch>
  );
};
