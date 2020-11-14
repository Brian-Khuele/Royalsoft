import Knex from "knex";

export const pg = Knex({
	client: "pg",
	connection: {
		host: "127.0.0.1",
		user: "postgres",
		password: "",
		database: "coderevo",
	},
});
