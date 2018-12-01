import { WebApi } from './WebApi';
import { ISetting } from 'src/models/ISetting';

export class SettingService extends WebApi {

  public settings() {
    return this.requestGet<ISetting>('/settings/list');
  }

  public setSetting(name, value, addedOptions) {
    return this.requestPost<ISetting>('/settings/set', {
      name,
      value,
      addedOptions,
    });
  }
}

export const settingService = new SettingService();
