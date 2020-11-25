import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire';
import VueMeta from 'vue-meta';
import "./bootstrap/bootstrap.css";

Vue.use(firestorePlugin);
Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
