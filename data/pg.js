//https://github.com/graphile/postgraphile-example-apollo-server/blob/master/server.js

require('dotenv').config();

const pg = require('pg');
const { makeSchemaAndPlugin } = require('postgraphile-apollo-server');

const postGraphileOptions = {
  jwtSecret: process.env.JWT_SECRET || String(Math.random()),
  // dynamicJson: true,
  // etc
};

const dbSchema = process.env.SCHEMA_NAMES
  ? process.env.SCHEMA_NAMES.split(',')
  : 'public';

const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
