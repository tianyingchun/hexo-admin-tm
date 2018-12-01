import { WebApi } from './WebApi';
import { ITagCategoriesMetadata } from '../models/ITagCategoryMetadata';
import { IDeploy } from '../models/IDeploy';

export class CommonService extends WebApi {

  public tagsCategoriesAndMetadata() {
    return this.requestGet<ITagCategoriesMetadata>('/tags-categories-and-metadata');
  }

  public deploy(message: string) {
    return this.requestPost<IDeploy>('/deploy', { message });
  }
}

export const commonService = new CommonService();
