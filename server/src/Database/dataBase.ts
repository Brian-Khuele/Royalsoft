const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

export default async function Connect() {
	let connection;

	try {
		connection = await oracledb.getConnection({
			user: 'briank',
			password: 'Mar#2020',
			connectString:
				'(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = canopus)(PORT = 1599))(CONNECT_DATA =(SID= qlinkdev)))'
		});

		console.log(connection);
	} catch (err) {
		console.error(err);
	} finally {
		if (connection) {
			try {
				await connection.close();
			} catch (err) {
				console.error(err);
			}
		}
	}
}
