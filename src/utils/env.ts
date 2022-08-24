const config = {
  development: {
    baseUrl: 'xxx',
  },
  test: {
    baseUrl: 'xxx',
  },
  production: {
    baseUrl: 'xxx',
  },
};
console.log(process.env.NODE_ENV)
const env = config[process.env.NODE_ENV];

export default env;
