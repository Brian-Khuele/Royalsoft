import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("country").del();

  // Inserts seed entries
  await knex('country').insert([
    {
      id: 1,
      description: 'South Africa',
      provinces: [],
    },
    { id: 2, description: 'Zimbabwe', provinces: [] },
    { id: 3, description: 'Botswana', provinces: [] },
    { id: 4, description: 'Namibia', provinces: [] },
  ]);
}
