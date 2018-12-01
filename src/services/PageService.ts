import { WebApi } from './WebApi';
import { IPage } from 'src/models/IPage';

export class PageService extends WebApi {

  public newPage(title) {
    return this.requestPost<IPage>('/pages/new', { title });
  }

  public pages() {
    return this.requestGet<IPage[]>('/pages/list');
  }

  public page(id, data) {
    if (data) {
      return this.requestPost<IPage>('/pages/' + id, data);
    }
    return this.requestGet<IPage>('/pages/' + id);
  }
}

export const pageService = new PageService();
