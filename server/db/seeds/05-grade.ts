import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("grade").del();

  // Inserts seed entries
  await knex("grade").insert([
    { id: 1, description: "Grade 1" },
    { id: 2, description: "Grade 2" },
    { id: 3, description: "Grade 3" },
    { id: 4, description: "Grade 4" },
    { id: 5, description: "Grade 5" },
    { id: 6, description: "Grade 6" },
    { id: 7, description: "Grade 7" },
    { id: 8, description: "Grade 8" },
    { id: 9, description: "Grade 9" },
    { id: 10, description: "Grade 10" },
    { id: 11, description: "Grade 11" },
    { id: 12, description: "Grade 12" },
    { id: 13, description: "Grade R" },
  ]);
}
