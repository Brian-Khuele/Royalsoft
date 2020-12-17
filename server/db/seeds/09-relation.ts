import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("relation").del();

  // Inserts seed entries
  await knex("relation").insert([
    { id: 1, description: "Mother" },
    { id: 2, description: "Father" },
    { id: 3, description: "Brother" },
  ]);
}
