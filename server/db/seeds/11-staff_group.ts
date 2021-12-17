import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  //await knex("staff_group").del();

  // Inserts seed entries
  await knex('staff_group').insert([
    {
      id: 1,
      description: 'Admin',
      permissions: JSON.stringify([
        { description: 'view learner' },
        { description: 'edit learner' },
        { description: 'deregister learner' },
        { description: 'register learner' },
      ]),
    },
    {
      id: 2,
      description: 'Teacher',
      permissions: JSON.stringify([
        { description: 'view learner' },
        { description: 'mark learner' },
      ]),
    },
    {
      id: 3,
      description: 'Discipline',
      permissions: JSON.stringify([
        { description: 'discipline learner' },
        { description: 'expel learner' },
      ]),
    },
  ]);
}
