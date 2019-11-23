module.exports = {

 apps : [
    {
      name      : 'my_react_app',
      script    : 'npm',
      args      : 'run start:production',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ] 

}
