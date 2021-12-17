import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("language").del();

  // Inserts seed entries
  await knex('language').insert([
    { id: 1, description: 'Tshivenda' },
    { id: 2, description: 'Xitsonga' },
    { id: 3, description: 'Sepedi ' },
    { id: 4, description: 'siSwati ' },
    { id: 5, description: 'Setswana ' },
    { id: 6, description: 'Sesotho ' },
    { id: 7, description: 'isiXhosa  ' },
    { id: 8, description: 'isiZulu ' },
    { id: 9, description: 'isiNdebele ' },
    { id: 10, description: 'English ' },
    { id: 11, description: 'Afrikaans ' },
  ]);
}
