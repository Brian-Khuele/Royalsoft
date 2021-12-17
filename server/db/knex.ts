import { knex } from 'knex';

const environment: string = process.env.NODE_ENV || 'development';
import config from 'knexfile';

export default knex(config[environment]);
