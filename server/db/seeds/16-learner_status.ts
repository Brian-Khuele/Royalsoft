import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("learner_status").del();

  // Inserts seed entries
  await knex("learner_status").insert([
    { id: 1, description: "Registered" },
    { id: 2, description: "De-Registered" },
    { id: 3, description: "Suspended" },
    { id: 4, description: "Probation" },
  ]);
}
