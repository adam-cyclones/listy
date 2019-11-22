import ToDoList from '../components/ToDoList';

export default {
  name: 'BasicView',
  inject: ['getLists'],
  render() {
    return (
      <main class='app-Main'>
        {this.getLists().map(list => (<ToDoList list={list}></ToDoList>))}
      </main>
    );
  }
};
