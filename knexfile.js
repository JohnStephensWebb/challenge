

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/bookshelf'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/bookshelf'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
