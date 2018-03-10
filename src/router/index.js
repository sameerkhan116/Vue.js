import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Contact from '../components/Contact';
import Friends from '../components/Friends';
import Account from '../components/Account';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
});
