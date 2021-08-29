import * as path from 'path';
import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

import TestingConfig from './config.testing';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = TestingConfig(appInfo);

  config.logger = {
    outputJSON: true,
    level: 'DEBUG',
    dir: path.resolve(__dirname, `../logs/${appInfo.name}`),
    appLogName: `${appInfo.name}-web.log`,
  };

  return config;
};
