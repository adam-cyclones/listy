const sillyname = require('sillyname');
import { List, Item } from '../types/interfaces';

export default {
  name: 'AddListButton',
  inject: [
    'addList',
    'getNextListID'
  ],
  data() {
    return {
      ui: {
        text: 'Add list'
      }
    }
  },
  methods: {
    handleClick() {
      this.addList({ 
        title: sillyname(),
        items: [] as Item[],
        id: this.getNextListID()
      } as List);
    }
  },
  render() {
    return (
      <button onClick={this.handleClick} type='button' class='btn-AddList'>
        {this.ui.text}
      </button>
    );
  },
}