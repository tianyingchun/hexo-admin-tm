
const router = require('./router')
const ReactDOM = require('react-dom');

module.exports = function (node) {
  ReactDOM.render(router(), node);
}
