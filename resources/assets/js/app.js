
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

let myHeader = require('./components/myHeader');
let Myfooter = require('./components/Myfooter');
let Home = require('./components/Home');
let About = require('./components/About');

const routes = [
    { path: '/phonebook/home', component: Home },
    { path: '/phonebook/about', component: About }
];

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router,
    components:{myHeader,Myfooter}
});
