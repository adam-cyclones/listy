import './ToDoList.scss';
import { Item } from '../types/interfaces';
import AddListItemButton from './AddListItemButton';
import ClearListButton from './ClearListButton';
import ToDoItem from './ToDoItem';


export default {
  name: 'ToDoList',
  inject: ['getListsLength'],
  props: {
    list: Object
  },
  data() {
    return {
      initialTitle: this.list.title,
      // Static ui
      ui: {
        placeholderText: 'Give your list a name',
        clearText: 'Clear list',
        deleteList: 'Delete list',
        editTitleText: 'Rename'
      }
    }
  },
  provide() {
    const {
      sortByDeccending,
      cleanupItems
    } = this;
    return {
      sortByDeccending,
      cleanupItems
    }
  },
  methods: {
    handleFocusTitle() {
      const elListTitleInput = this.$refs.listTitleInput;
      elListTitleInput.select();
      elListTitleInput.focus();
    },
    handleTitleChange() {
      const elListTitleInput = this.$refs.listTitleInput;
      const { value } = elListTitleInput;
      // title not blank
      this.list.title = value || this.initialTitle;
      elListTitleInput.value = value || this.initialTitle;
    },
    sortByDeccending() {
      this.list.items = this.list.items.sort((a: Item, b: Item) => {
         return Number(a.priority) - Number(b.priority);
      });
    },
    cleanupItems() {
      this.list.items = this.list.items.filter(Boolean);
    }
  },
  render() {
    return (
      <div class='tdl'>
        <header class='tdl-ListHeader'>
          <input
            class='tdl-ListTitle'
            placeholder={this.ui.placeholderText}
            ref='listTitleInput'
            type='text'
            value={this.list.title}
            onFocusout={this.handleTitleChange}/>
        </header>
        <section class='tdl-ListWrapper'>
          <button
            class='app-BtnGeneric'
            type='button'
            onClick={this.handleFocusTitle}
            ref='editTitleButton'>{this.ui.editTitleText}</button>
          { // prevent deletion of first list only allow clear
            this.getListsLength() > 1 ?
              <ClearListButton text={this.list.items.length ? this.ui.clearText : this.ui.deleteList}></ClearListButton> :
              <ClearListButton text={this.ui.clearText}></ClearListButton>
          }
          <ul class='tdl-List'>
            {this.list.items.map(item => (<ToDoItem item={item}></ToDoItem>))}
          </ul>
        </section>
        <footer class='tdl-ListFooter'>
          <AddListItemButton></AddListItemButton>
        </footer>
      </div>
    );
  }
}