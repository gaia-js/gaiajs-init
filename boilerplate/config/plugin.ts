import { EggPlugin } from 'egg';

const plugin: EggPlugin = {

  validate: {
    enable: true,
    package: 'egg-validate',
  },

  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },

  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  redis: {
    enable: true,
    package: 'egg-redis',
  },

};

export default plugin;
