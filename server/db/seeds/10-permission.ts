import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("permission").del();

  // Inserts seed entries
  await knex('permission').insert([
    { id: 1, description: 'View Learner' },
    { id: 2, description: 'Edit Learner' },
    { id: 3, description: 'Register Learner' },
    { id: 4, description: 'Send Announcements' },
    { id: 5, description: 'View Online Applications' },
  ]);
}
