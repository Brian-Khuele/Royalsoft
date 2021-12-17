import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("combination").del();

  // Inserts seed entries
  await knex('combination').insert([
    { id: 1, description: 'A' },
    { id: 2, description: 'B' },
    { id: 3, description: 'C' },
    { id: 4, description: 'D' },
    { id: 5, description: 'E' },
    { id: 6, description: 'F' },
  ]);
}
