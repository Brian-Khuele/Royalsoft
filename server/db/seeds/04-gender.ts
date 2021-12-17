import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("gender").del();

  // Inserts seed entries
  await knex('gender').insert([
    { id: 1, description: 'Male' },
    { id: 2, description: 'Female' },
    { id: 3, description: 'Other' },
  ]);
}
