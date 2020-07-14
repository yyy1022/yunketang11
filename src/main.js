import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";
import store from "../src/store/index"

Vue.use(VueAxios, axios);

import {
    Button,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Carousel,
    CarouselItem,
    Tabs,
    TabPane, Dialog,
    FormItem,
    Form,
    Input,
    Message,
    Checkbox
} from "element-ui";

Vue.use(Main);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Menu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.component(Button.name, Button);
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Checkbox);

// Vue.use(Message);

Vue.prototype.$message = Message;
// Vue.prototype.$notify = Notification;
// Vue.component(Select.name, Select);

Vue.config.productionTip = false;
// new Vue().$mount('#app')
new Vue({
    router,
    store: store,


    render: (h) => h(App),
}).$mount("#app");