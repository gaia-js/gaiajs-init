import 'egg';
import 'egg-gaiajs';
import { gaia } from 'egg-gaiajs';

declare module 'egg' {
  interface IService extends IAppService, gaia.IService {
  }
  interface IObject extends IAppObject, gaia.IObject {
  }

  interface Context extends gaia.Context, EggContext {
    service: IService
    object: IObject
  }

  interface Application extends IGaiaApplication, IGaiaService17Application, EggApplication {
    model: IModel;
  }
}
