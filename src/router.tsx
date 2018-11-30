import { Route, Switch } from 'react-router-dom';
import { Post, Posts } from './post';
import { Page, Pages } from './page';
import { About } from './about';
import { Deploy } from './deploy';
import { Settings, AuthSetup } from './setting';

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
