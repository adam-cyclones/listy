import ToDoList from '../components/ToDoList';

export default {
  name: 'BasicPage',
  render() {
    return (
      <div class='app-View'>
        <main class='app-Main'>
          <ToDoList></ToDoList>
        </main>
      </div>
    );
  },
};
