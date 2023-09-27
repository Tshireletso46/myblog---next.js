const {PHASE_DEVELOPMENT_SEVER} = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SEVER) {
    return{
       env: {
        mongodb_username: 'TshireletsoMpudu',
        mongodb_password: 'T23251511t',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev'
      },
    };
  };


  return {
  env: {
    mongodb_username: 'TshireletsoMpudu',
    mongodb_password: 'T23251511t',
    mongodb_clustername: 'cluster0',
    mongodb_database: 'my-site'
  },
};
};