import 'egg';
import '@gaiajs/gaiajs';
import { gaia } from '@gaiajs/gaiajs';

declare module 'egg' {
  interface IService extends IAppService, gaia.IService {
  }
  interface IObject extends IAppObject, gaia.IObject {
  }

  interface Context extends gaia.Context, EggContext {
    service: IService
    object: IObject
  }

  interface Application extends IGaiaApplication, EggApplication {
    model: IModel;
  }
}
