import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("subject_grade").del();

  // Inserts seed entries
  await knex("subject_grade").insert([
    { subject_id: 1, grade: 12, compulsory: 1 },
    { subject_id: 2, grade: 12, compulsory: 1 },
    { subject_id: 3, grade: 12, compulsory: 0 },
  ]);
}
