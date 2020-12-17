import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("staff_status").del();

  // Inserts seed entries
  await knex("staff_status").insert([
    { id: 1, description: "Active" },
    { id: 2, description: "Inactive" },
  ]);
}
