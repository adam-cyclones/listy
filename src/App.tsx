import './store';
import AsyncComputed from "vue-async-computed";
import router from "./routes";
import Vue from "vue";
import VueRouter from "vue-router";
// Styles
import "./style/App.scss";
// Components
import Navigation from "./components/Navigation";

Vue.use(AsyncComputed);
Vue.use(VueRouter);

Vue.config.productionTip = false

export default new Vue({
  name: 'Adam',
  el: "#app",
  render() {
    return (
      <div class='app-Root'>
        <Navigation></Navigation>
        <router-view></router-view>
      </div>
    )
  },
  router,
});