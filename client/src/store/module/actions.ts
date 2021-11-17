import { ActionTree } from 'vuex';
import axios from 'axios';
import { StoreInterface } from '../index';
import { hydraSystemValues } from './state';

const actions: ActionTree<hydraSystemValues, StoreInterface> = {
  async setRaces(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/races');

      context.commit('setRaces', response.data);
    } catch (error) {
      //
    }
  },
  async setRoles(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/roles');

      context.commit('setRoles', response.data);
    } catch (error) {
      //
    }
  },
  async setCountries(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/countries');

      context.commit('setCountries', response.data);
    } catch (error) {
      //
    }
  },
  async setGrades(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/grades');

      context.commit('setGrades', response.data);
    } catch (error) {
      //
    }
  },
  async setSubjects(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/subjects');

      context.commit('setSubjects', response.data);
    } catch (error) {
      //
    }
  },
  async setCombinations(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/combinations');

      context.commit('setCombinations', response.data);
    } catch (error) {
      //
    }
  },
  async setGenders(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/genders');

      context.commit('setGenders', response.data);
    } catch (error) {
      //
    }
  },
  async setIdTypes(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/idtypes');

      context.commit('setIdTypes', response.data);
    } catch (error) {
      //
    }
  },
  async setLanguages(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/languages');

      context.commit('setLanguages', response.data);
    } catch (error) {
      //
    }
  },
  async setRelations(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/relations');

      context.commit('setRelations', response.data);
    } catch (error) {
      //
    }
  },
  async setLearnerStatus(context) {
    try {
      const response = await axios.get('http://localhost:3001/system/learnerStatus');

      context.commit('setLearnerStatus', response.data);
    } catch (error) {
      //
    }
  },
};

export default actions;
