import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("application_status").del();

  // Inserts seed entries
  await knex("application_status").insert([
    { id: 1, description: "received" },
    { id: 2, description: "checking in progress" },
    { id: 3, description: "on hold" },
    { id: 4, description: "declined" },
    { id: 5, description: "accepted" },
  ]);
}
