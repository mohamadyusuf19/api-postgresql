// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cjs-web-store',
      user:     'postgres',
      password: 'Etihad@123'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test-cjs-web-store',
      user:     'postgres',
      password: 'Etihad@123'
    }
  },
};
