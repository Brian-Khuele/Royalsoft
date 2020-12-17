import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("race").del();

  // Inserts seed entries
  await knex("race").insert([
    { id: 1, description: "Black" },
    { id: 2, description: "Indian" },
    { id: 3, description: "White" },
    { id: 4, description: "Colored" },
    { id: 5, description: "Other" },
  ]);
}
