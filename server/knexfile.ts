const config: any = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'dalfr4al8q3kgg',
      user: 'cmkhnadrtxhmxe',
      password: '9b109947b76ff2b1e108634adb947ae905de703943ee9545668389eed516fa3a',
      port: 5432,
      host: 'ec2-107-21-113-60.compute-1.amazonaws.com',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
      extension: 'ts',
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'dalfr4al8q3kgg',
      user: 'cmkhnadrtxhmxe',
      password: '9b109947b76ff2b1e108634adb947ae905de703943ee9545668389eed516fa3a',
      port: 5432,
      host: 'ec2-107-21-113-60.compute-1.amazonaws.com',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '/db/migrations',
      extension: 'ts',
    },
    seeds: {
      extension: 'ts',
      directory: '/db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dalfr4al8q3kgg',
      user: 'cmkhnadrtxhmxe',
      password: '9b109947b76ff2b1e108634adb947ae905de703943ee9545668389eed516fa3a',
      port: 5432,
      host: 'ec2-107-21-113-60.compute-1.amazonaws.com',
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations',
      extension: 'ts',
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds',
    },
  },
};

export default config;
