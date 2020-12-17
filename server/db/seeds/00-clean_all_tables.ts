import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  const tables = [
    "teacher_subject_grade_combination",
    "staff",
    "staff_status",
    "learner_subject_combination",
    "subject_grade",
    "staff_group",
    "permission",
    "learner_parent",
    "onlineApplications",
    "application_status",
    "learner",
    "learner_status",
    "parent",
    "parent_status",
    "combination",
    "country",
    "gender",
    "grade",
    "idtype",
    "language",
    "race",
    "relation",
    "staff_type",
    "subject",
  ];
  // Deletes ALL existing entries in ALL tables.
  //BRIANK - Be sure that the order of tables is consistent with the order of foreign key constraints
  tables.map(async (table) => {
    await knex(table).del();
    console.log("deleted");
  });
}
