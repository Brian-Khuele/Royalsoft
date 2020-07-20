import Knex from 'knex';

export const pg = Knex({
	client: 'pg',
	connection: {
		host: '127.0.0.1',
		user: 'postgres',
		password: '',
		database: 'QLINKvdo'
	}
});

export const oracle = Knex({
	client: 'oracledb',
	connection: {
		host: 'canopus:1599',
		user: 'briank',
		password: 'May#2020',
		database: 'qlinkdev'
		/* ,
		connectionString:
			'(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = canopus)(PORT = 1599))(CONNECT_DATA =(SID= qlinkdev)))' */
	},
	pool: { min: 0, max: 7 }
});
//functions
