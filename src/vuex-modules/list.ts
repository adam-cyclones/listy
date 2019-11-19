/**
 * @file Creates a new list state to add todos
*/
import { List } from '../types/interfaces';

export default {
  namespaced: true,
  state: {
    title: '',
    items: []
   } as List,
  mutations: {

  },

  getters: {

  }
}