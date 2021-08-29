import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

import DevConfig from './config.dev';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = DevConfig(appInfo);

  return config;
};
