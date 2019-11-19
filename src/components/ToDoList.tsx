import ToDoItem from './ToDoItem';

export default {
  name: 'ToDoList',
  data() {
    return {
      fakeItems: [1, 2, 3]
    }
  },
  render() {
    return (
      <div class='tdl'>
        <header>
          <h2>TITLE</h2> <p>{this.fakeItems.length > 0 ? 'CLEAR' : 'DELETE LIST'}</p>
        </header>
        <section>
          <ul>
            {this.fakeItems.map(item => (<ToDoItem></ToDoItem>))}
          </ul>
        </section>
      </div>
    );
  }
}