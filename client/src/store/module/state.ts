export interface hydraSystemValues {
	races: Array<string>;
	roles: Array<string>;
	grades: Array<string>;
	subjects: Array<string>;
	countries: Array<string>;
	genders: Array<string>;
	idTypes: Array<string>;
	languages: Array<string>;
	combinations: Array<string>;
	relations: Array<string>;
	learnerStatus: Array<string>;
}

const state: hydraSystemValues = {
  races: [],
  roles: [],
  countries: [],
  grades: [],
  subjects: [],
  combinations: [],
  genders: [],
  idTypes: [],
  languages: [],
  relations: [],
  learnerStatus: [],
};

export default state;
