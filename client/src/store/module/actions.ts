import { ActionTree } from "vuex";
import { StoreInterface } from "../index";
import { hydraSystemValues } from "./state";
import axios from "axios";

const actions: ActionTree<hydraSystemValues, StoreInterface> = {
	async setRaces(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/races");

			context.commit("setRaces", response.data);
		} catch (error) {}
	},
	async setRoles(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/roles");

			context.commit("setRoles", response.data);
		} catch (error) {}
	},
	async setCountries(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/countries");

			context.commit("setCountries", response.data);
		} catch (error) {}
	},
	async setGrades(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/grades");

			context.commit("setGrades", response.data);
		} catch (error) {}
	},
	async setSubjects(context) {
		console.log("WE HAVE SUBJECTS");
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/subjects");

			context.commit("setSubjects", response.data);
		} catch (error) {}
	},
	async setCombinations(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/combinations");

			context.commit("setCombinations", response.data);
		} catch (error) {}
	},
	async setGenders(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/genders");

			context.commit("setGenders", response.data);
		} catch (error) {}
	},
	async setIdTypes(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/idtypes");

			context.commit("setIdTypes", response.data);
		} catch (error) {}
	},
	async setLanguages(context) {
		try {
			const response = await axios.get("https://virtserver.swaggerhub.com/r8926/hydraX/1-oas3/languages");

			context.commit("setLanguages", response.data);
		} catch (error) {}
	},
};

export default actions;
