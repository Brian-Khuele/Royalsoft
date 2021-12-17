import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('combination', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('country', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
      table.json('provinces');
    })
    .createTable('gender', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('grade', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('idtype', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('language', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('race', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('relation', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('staff_type', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('subject', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('learner_status', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('staff_status', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('parent_status', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
    })
    .createTable('subject_grade', (table) => {
      table.integer('subject_id').references('id').inTable('subject');
      table.integer('grade').references('id').inTable('grade');
      table.integer('compulsory').notNullable();
    })
    .createTable('permission', (table) => {
      table.increments().notNullable().primary();
      table.string('description').notNullable(); //View learners|Edit learner|Register learner|
    })
    .createTable('staff_group', (table) => {
      table.increments('id').primary();
      table.string('description').notNullable();
      table.json('permissions');
      //table.specificType("permissions", "json ARRAY");
    })
    .createTable('learner', (table) => {
      table.bigIncrements('student_number').primary().defaultTo(1000);
      table.string('name', 255).notNullable();
      table.string('surname', 255).notNullable();
      table.string('id_number').notNullable();
      table.integer('grade').notNullable().references('id').inTable('grade');
      table.string('email').notNullable();
      table.integer('gender').notNullable().references('id').inTable('gender');
      table.string('cellphone_number');
      table.integer('id_type').references('id').inTable('idtype');
      table.integer('birth_country').references('id').inTable('country');
      table.integer('home_language').references('id').inTable('language');
      table.integer('race').references('id').inTable('race');
      table.integer('combination').references('id').inTable('combination');
      table.integer('status').references('id').inTable('learner_status').notNullable().defaultTo(1);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('parent', (table) => {
      table.string('parent_id').notNullable().primary();
      table.string('name').notNullable();
      table.string('surname').notNullable();
      table.string('email').notNullable();
      table.integer('gender').notNullable();
      table.string('cellphone_number').notNullable();
      table.string('work_tel');
      table.string('home_tel');
      table.string('occupation');
      table.string('employer_name');
      table.string('employer_tel');
      table.string('employer_address');
      table.integer('race');
      table.integer('status').references('id').inTable('parent_status').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('staff', (table) => {
      table.increments().primary();
      table.string('name').notNullable();
      table.string('surname').notNullable();
      table.string('email').notNullable().unique();
      table.integer('gender').references('id').inTable('gender');
      table.integer('staff_type').references('id').inTable('staff_type');
      table.integer('group_id').references('id').inTable('staff_group');
      table.string('cellphone_number');
      table.integer('race').references('id').inTable('race');
      table.integer('status').references('id').inTable('staff_status').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('learner_subject_combination', (table) => {
      table.integer('student_number').references('student_number').inTable('learner');
      table.integer('subject_id').references('id').inTable('subject');
      table.integer('combination_id').references('id').inTable('combination');
    })
    .createTable('teacher_subject_grade_combination', (table) => {
      table.integer('staff_id').references('id').inTable('staff');
      table.integer('subject_id').references('id').inTable('subject');
      table.integer('grade_id').references('id').inTable('grade');
      table.integer('combination_id').references('id').inTable('combination');
    })

    .createTable('learner_parent', (table) => {
      table.integer('student_number').references('student_number').inTable('learner').notNullable();
      table.string('parent_id').references('parent_id').inTable('parent').notNullable();
    })
    .createTable('application_status', (table) => {
      table.increments().primary();
      table.string('description').notNullable();
    })
    .createTable('onlineApplications', (table) => {
      table.string('application_id').notNullable().primary();
      table.json('learner').notNullable();
      table.json('parent').notNullable();
      table.integer('application_status').references('id').inTable('application_status');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
  //delete all tables
  return knex.schema
    .dropTable('teacher_subject_grade_combination')
    .dropTable('staff')
    .dropTable('staff_status')
    .dropTable('learner_subject_combination')
    .dropTable('subject_grade')
    .dropTable('staff_group')
    .dropTable('permission')
    .dropTable('learner_parent')
    .dropTable('onlineApplications')
    .dropTable('application_status')
    .dropTable('learner')
    .dropTable('learner_status')
    .dropTable('parent')
    .dropTable('parent_status')
    .dropTable('combination')
    .dropTable('country')
    .dropTable('gender')
    .dropTable('grade')
    .dropTable('idtype')
    .dropTable('language')
    .dropTable('race')
    .dropTable('relation')
    .dropTable('staff_type')
    .dropTable('subject');
}
