import AsyncComputed from "vue-async-computed";
import Vue from "vue";
import BasicView from "./views/BasicView";
// Styles
import "./style/App.scss";
// Components
import Navigation from "./components/Navigation";

Vue.use(AsyncComputed);

Vue.config.productionTip = false

export default new Vue({
  name: 'Listy',
  el: "#app",
  render() {
    return (
      <div class='app-Root'>
        <Navigation></Navigation>
        <BasicView></BasicView>
      </div>
    )
  },
});