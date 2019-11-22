import './ToDoItem.scss';
import { getPriorityName } from '../utils/getPriorityName';
import { Item } from '../types/interfaces'

export default {
  name: 'ToDoItem',
  props: {
    item: Object,
  },
  data() {
    return {
      ui: {
        deleteButtonText: 'delete'
      }
    }
  },
  inject: ['sortByDeccending', 'cleanupItems'],
  methods: {
    handleChangeToDoInput() {
      const elToDoInput = this.$refs.toDo;
      (this.item as Item).body = elToDoInput.value;
    },
    handleChangePriority() {
      const elSelectPriority = this.$refs.selectPriority;
      (this.item as Item).priority = elSelectPriority.value;
      this.sortByDeccending()
    },
    handleDeleteSelf() {
      console.log(this.item.id)
      delete this.$parent.list.items[this.item.id - 1];
      this.cleanupItems();
    }
  },
  render() {
    return (
      <li class='tdl-Item'>
        <div class='tdl-ToDoWrapper'>
          <input data-test='todo-item' ref='toDo' class='tdl-ToDo' value={this.item.body} onKeyup={this.handleChangeToDoInput} type='text' placeholder='Add a todo item..'></input>
          <button data-test='delete-item-btn' onClick={this.handleDeleteSelf} type='button' class='tdl-Item_Delete'>{this.ui.deleteButtonText}</button>
        </div>
        <div class='tdl-Priority'>
          <label class='tdl-PrioritySymbol'>🔝</label>
          <select data-test='change-priority-order-select' ref='selectPriority' class='tdl-PrioritySelectList' onChange={this.handleChangePriority} value={(this.item as Item).priority}>
            <option value='1'>{getPriorityName(1)}</option>
            <option value='2'>{getPriorityName(2)}</option>
            <option value='3'>{getPriorityName(3)}</option>
          </select>
        </div>
      </li>
    );
  }
}