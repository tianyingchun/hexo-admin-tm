import request from 'superagent';

export const post = (url = '', data = {}, baseUrl = '') => {
  return new Promise((resolve, reject) => {
    request
      .post(`${baseUrl} + ${url}`)
      .send(data)
      .then((res) => {
        resolve(res.body);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const get = (url = '', params = {}, baseUrl = '') => {
  return new Promise((resolve, reject) => {
    request
      .get(`${baseUrl} + ${url}`)
      .query(params)
      .then((res) => {
        resolve(res.body);
      })
      .catch(err => {
        reject(err);
      });
  });
};
