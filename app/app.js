import Vue from "nativescript-vue";

import Home from "./components/Home";

// import VueDevtools from 'nativescript-vue-devtools';
// Vue.use(VueDevtools);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
