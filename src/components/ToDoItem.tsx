export default {
  name: 'ToDoItem',
  data() {
    return {}
  },
  render() {
    return (
      <li class='tdl-Item'>
        <p>DATE CRETEAD</p>
        <p>PRIORITY</p>
        <button type='button' class='tdl-Item_Delete'>Delete</button>
        <textarea>SOME VALUE</textarea>
      </li>
    );
  }
}