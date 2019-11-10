import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Home from './components/Home.vue';


Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component('home', Home);

Vue.component('home', Home);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
