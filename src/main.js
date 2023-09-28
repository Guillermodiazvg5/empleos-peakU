import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavBar from './components/NavBar.vue'

Vue.component('NavBar', NavBar);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
