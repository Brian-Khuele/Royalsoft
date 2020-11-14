import { MutationTree } from 'vuex';
import { hydraSystemValues } from './state';

const mutation: MutationTree<hydraSystemValues> = {
  setRaces(state: hydraSystemValues, payload) {
    state.races = payload;
  },
  setRoles(state, payload) {
    state.roles = payload;
  },
  setCountries(state, payload) {
    state.countries = payload;
  },
  setGrades(state, payload) {
    state.grades = payload;
  },
  setSubjects(state, payload) {
    state.subjects = payload;
  },
  setCombinations(state, payload) {
    state.combinations = payload;
  },
  setGenders(state, payload) {
    state.genders = payload;
  },
  setIdTypes(state, payload) {
    state.idTypes = payload;
  },
  setLanguages(state, payload) {
    state.languages = payload;
  },
  setRelations(state, payload) {
    state.relations = payload;
  },
  setLearnerStatus(state, payload) {
    state.learnerStatus = payload;
  },
};

export default mutation;
