import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style.css";
import router from "./router";
import store from "./store/index";
import PrimeVue from 'primevue/config';
import OrganizationChart from 'primevue/organizationchart';
import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';                 //core css
// import 'primeicons/primeicons.css';                           //icons


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
app.use(PrimeVue);
app.component('OrganizationChart', OrganizationChart);





      
  