import { GetterTree } from "vuex";
import { StoreInterface } from "../index";
import { hydraSystemValues } from "./state";

const getters: GetterTree<hydraSystemValues, StoreInterface> = {
	getRaces(state) {
		return state.races;
	},
	getRoles(state) {
		return state.roles;
	},
	getCountries(state) {
		return state.countries;
	},
	getGrades(state) {
		return state.grades;
	},
	getSubjects(state) {
		return state.subjects;
	},
	getCombinations(state) {
		return state.combinations;
	},
	getGenders(state) {
		return state.genders;
	},
	getIdTypes(state) {
		return state.idTypes;
	},
	getLanguages(state) {
		return state.languages;
	},
};

export default getters;
