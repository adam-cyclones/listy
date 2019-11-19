import "./Navigation.scss";
import store from '../store';
import { mapGetters } from "vuex";

export default {
  store,
  name: 'Navigation',
  data() {
    return {
      homeUrl: '/home'
    }
  },
  render() {
    return (
      <header class='nav'>
        <h1 class='nav-Header'>{this.getAppName}</h1>
      </header>
    );
  },
  computed: {
    ...mapGetters('contentModule', ['getAppName']),
  }
}