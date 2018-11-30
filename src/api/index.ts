import { get, post } from './rest';

class AdminWebService {
  public posts() {
    return get('/posts/list');
  }

  public post(id, data) {
    if (data) {
      return post('/posts/' + id, data);
    }
    return get('/posts/' + id);
  }

  public newPost(title) {
    return post('/posts/new', { title });
  }

  public pages() {
    return get('/pages/list');
  }

  public page(id, data) {
    if (data) {
      return post('/pages/' + id, data);
    }
    return get('/pages/' + id);
  }

  public deploy(message) {
    return post('/deploy', { message });
  }

  public newPage(title) {
    return post('/pages/new', { title });
  }

  public uploadImage(data, filename) {
    return post('/images/upload', { data, filename });
  }

  public remove(id) {
    return post('/posts/' + id + '/remove');
  }

  public publish(id) {
    return post('/posts/' + id + '/publish');
  }

  public unpublish(id) {
    return post('/posts/' + id + '/unpublish');
  }

  public renamePost(id, filename) {
    return post('/posts/' + id + '/rename', {
      filename,
    });
  }

  public tagsCategoriesAndMetadata() {
    return get('/tags-categories-and-metadata');
  }

  public settings() {
    return get('/settings/list');
  }

  public setSetting(name, value, addedOptions) {
    return post('/settings/set', {
      name,
      value,
      addedOptions,
    });
  }
}

export const adminService = new AdminWebService();
