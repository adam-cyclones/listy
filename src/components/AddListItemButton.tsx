import './AddListItemButton.scss';
import { Item } from '../types/interfaces';

export default {
  name: 'AddListItemButton',
  data() {
    return {
      ui: {
        text: 'Add Item'
      }
    }
  },
  methods: {
    handleClick() {
      this.$parent.list.items.push({
        body: '',
        id: this.$parent.list.items.length,
        priority: 3
      } as Item)
    }
  },
  render() {
    return (
      <button data-test='add-list-btn' onClick={this.handleClick} type='button' class='btn-AddListItem'>
        {this.ui.text}
      </button>
    );
  },
}