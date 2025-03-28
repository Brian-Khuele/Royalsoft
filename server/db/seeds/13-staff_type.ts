import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("staff_type").del();

  // Inserts seed entries
  await knex('staff_type').insert([
    { id: 1, description: 'Teacher' },
    { id: 2, description: 'Admin' },
    { id: 3, description: 'Finance Staff' },
  ]);
}
