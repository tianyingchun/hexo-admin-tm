import './less/index.less';
import * as ReactDOM from 'react-dom';
import App from './components/app';
import routes from './router';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App routes={routes()} />, document.getElementById('app'));
});
