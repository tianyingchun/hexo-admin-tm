import { Route, Switch } from 'react-router-dom';
import { Post, Posts } from './post';
import { Page, Pages } from './page';
import { About } from './about';
import { Deploy } from './deploy';
import { Settings, AuthSetup } from './setting';

export default () => {
  return (
    <Switch>
      <Route name="post" render={(props) => <Post {...props} />} path="/posts/:postId" />
      <Route name="page" render={(props) => <Page {...props} />} path="/pages/:pageId" />
      <Route name="pages" render={(props) => <Pages {...props} />} path="/pages" />
      <Route name="about" render={(props) => <About {...props} />} path="/about" />
      <Route name="deploy" render={(props) => <Deploy {...props} />} path="/deploy" />
      <Route name="settings" render={(props) => <Settings {...props} />} path="/settings" />
      <Route name="auth-setup" render={(props) => <AuthSetup {...props} />} path="/auth-setup" />
      <Route name="posts" render={(props) => <Posts {...props} />} path="/" />
    </Switch>
  );
};
