import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("subject").del();

  // Inserts seed entries
  await knex('subject').insert([
    { id: 1, description: 'Mathematics' },
    { id: 2, description: 'English' },
    { id: 3, description: 'Information Technology' },
    { id: 4, description: 'Physical Sciences' },
    { id: 5, description: 'Life Sciences' },
    { id: 6, description: 'Geography' },
    { id: 7, description: 'CAT' },
    { id: 8, description: 'Life Orientation' },
    { id: 9, description: 'Economics' },
  ]);
}
