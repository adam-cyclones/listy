import './Navigation.scss';
import AddListButton from './AddListButton';

export default {
  name: 'Navigation',
  data() {
    return {
      appName: 'Listy'
    }
  },
  render() {
    return (
      <div class='nav'>
        <header class='nav-Header'>
          <h1 class='nav-Brand'>{this.appName}</h1>
          <AddListButton></AddListButton>
        </header>
      </div>
    );
  }
}