import { EggAppConfig, PowerPartial, EggAppInfo } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config: PowerPartial<EggAppConfig> = {};

  config.hydra = {
    zookeeper: {
      host: '10.200.249.18,10.200.249.19,10.200.249.20',
    },
  };

  config.security = {
    domainWhiteList: [ '*' ],
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    credentials: true,
  };

  config.rhea = {
    server: '10.6.14.23',
    port: 14503,
    name: appInfo.name,
  };

  config.couchbase = {
    clusters: {
      default: {
        url: 'couchbase://192.168.100.67,192.168.100.73/middleschool?operation_timeout=300&config_node_timeout=2',
        bucket: 'middleschool',
        prefix: `${appInfo.name}:`,
      },
    },
  };

  config.redis = {
    clients: {
      default: {
        port: 6379,
        host: '192.168.100.14',
        db: 0,
        password: '',
        keyPrefix: `${appInfo.name}:`,
      },
    },
  };

  config.mongoose = {
    clients: {
      default: {
        url:
          `mongodb://17zuoye-user-ld:office.17zuoye.2016@192.168.100.10:57000,192.168.100.36:57000/vox-${appInfo.name}?authSource=admin&connectTimeoutMS=3000`,
        options: {
          useNewUrlParser: true,
        },
        // @ts-ignore
        loadModel: false,
      },
    },
  };

  return config;
};
