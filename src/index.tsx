import * as ReactDOM from 'react-dom';
import App from './App';
import routes from './router';
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App routes={routes()} />, document.getElementById('app'));
});
