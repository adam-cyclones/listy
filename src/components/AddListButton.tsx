

export default {
  name: 'AddListButton',
  data() {
    return {
      text: 'Add list'
    }
  },
  methods: {
    handleClick() {
      
    }
  },
  render() {
    return (
      <button onClick={this.handleClick} type='button' class='btn-Add'>
        {this.text}
      </button>
    );
  },
}