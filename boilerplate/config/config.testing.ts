import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  config.security = {
    domainWhiteList: [ '*' ],
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    credentials: true,
  };

  return config;
};
