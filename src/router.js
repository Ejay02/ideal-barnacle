import {createRouter, createWebHistory} from "vue-router";
import DcHeroes from './pages/DcHeroes.vue';
import Calender from './pages/Calender.vue';
import Home from './pages/Home';
import Markdown from './pages/Markdown.vue';
import OrgChart from './pages/OrgChart.vue';
import Slider from './pages/Slider.vue';
import Calculator from './pages/Calculator.vue';
import ReuseableModal from './pages/ReuseableModal.vue';
import UserCrud from "./pages/UserCrud.vue";
import Chat from './pages/Chat.vue';
import Tensorflow from './pages/Tensorflow.vue';
import store from "./store/index";



const routes = [
    {path:'/', component:Home},
    {path:'/dc-heroes', component:DcHeroes},
    {path:'/calender', component:Calender},
    {path:'/markdown', component:Markdown},
    {path:'/orgchart', component:OrgChart, meta: {middleware:'auth'}},
    {path:'/slider', component:Slider},
    {path:'/calculator', component:Calculator, meta: {middleware:'auth'}},
    {path:'/reuseable-modal', component:ReuseableModal},
    {path:'/chat', component:Chat, meta: {middleware:'auth'}},
    {path:'/user-crud', component:UserCrud},
    {path:'/tensorflow', component:Tensorflow},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _,next) => {
    if (to.meta.middleware){
        const middleware = require(`./middleware/${to.meta.middleware}`);
        if (middleware) {
            middleware.default(next,store);
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;