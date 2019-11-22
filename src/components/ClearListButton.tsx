import './AddListItemButton.scss';

export default {
  name: 'ClearListItemButton',
  inject: ['getLists', 'cleanupLists'],
  props: {
    text: String
  },
  methods: {
    handleClick() {
      if (this.$parent.list.items.length) {
        this.$parent.list.items = [];
      } else {
        if (this.getLists().length > 1) {
          const currentListIndex = this.$parent.list.id - 1;
          delete this.getLists()[currentListIndex];
          this.cleanupLists();
        } 
      }
    }
  },
  render() {
    return (
      <button data-test='clear-list-of-items' onClick={this.handleClick} type='button' class='btn-ClearList app-BtnGeneric'>
        {this.text}
      </button>
    );
  },
}