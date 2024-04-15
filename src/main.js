import Vue from 'vue';
import App from './App';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';

Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  render(h) {
    return h(App);
  },
});
