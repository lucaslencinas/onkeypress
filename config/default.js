const config = {
  uri: {
    hostname: process.env.HOSTNAME || '0.0.0.0',
    port: process.env.PORT || 3000
  },
  storage: {
    type: 'redis',
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1'
    }
  }
};

module.exports = config;
