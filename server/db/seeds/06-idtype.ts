import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("idtype").del();

  // Inserts seed entries
  await knex('idtype').insert([
    { id: 1, description: 'South African ID' },
    { id: 2, description: 'Passport' },
  ]);
}
