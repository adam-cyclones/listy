import { List, Item } from './types/interfaces';
import Vue from "vue";
import BasicView from "./views/BasicView";
const sillyname = require('sillyname');
// Styles
import "./style/App.scss";
// Components
import Navigation from "./components/Navigation";

Vue.config.productionTip = false

export default new Vue({
  name: 'Listy',
  el: "#app",
  data() {
    return {
      lists: JSON.parse(localStorage.getItem('persisted')) || [] as List[],
    }
  },
  provide() {
    const { 
      addList,
      cleanupLists,
      getLists,
      getListsLength,
      getNextListID,
      removeList
    } = this;
    return {
      addList,
      cleanupLists,
      getLists,
      getListsLength,
      getNextListID,
      removeList
    }
  },
  methods: {
    addList(list: List) {
      this.lists.push(list);
    },
    getLists() {
      return this.lists;
    },
    getListsLength() {
      return this.getLists().length
    },
    getNextListID() {
      return this.getListsLength() + 1;
    },
    cleanupLists() {
      this.lists = this.lists.filter(Boolean);
    }
  },
  render() {
    return (
      <div class='app-Root'>
        <Navigation></Navigation>
        <BasicView></BasicView>
      </div>
    )
  },
  created() {
    if (!this.getListsLength()) {
      const initialItem: Item = {
        body: '',
        id: 0,
        priority: 3
      };
      const initialList: List = {
        id: this.getNextListID(),
        items: [initialItem] as Item[],
        title: sillyname()
      };
      // initial list if none persisted
      this.addList(initialList);
    }
  },
  watch: {
    // quick and diry persistance
    lists: {
      deep: true,
      handler(oldValue, newValue) {
        localStorage.removeItem('persisted');
        localStorage.setItem('persisted', JSON.stringify(newValue.filter(Boolean)));
      }
    } as any
  }
});