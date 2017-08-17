                   
 /*  .--,       .--,
 * ( (  \.---./  ) )
 *  '.__/👁  👁\__.'
 *     {=  ^  =}
 *      >  -  <
 *     /       \
 *    //       \\
 *   //|   .   |\\
 *   "'\       /'"_.-~^`'-.
 *      \  _  /--'         `
 *    ___)( )(___
 *   (((__) (__)))
 */  
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Router from 'vue-router';
import {routes} from './router/index';
//success sixsix
var router =  new Router({
	routes
})
Vue.use(Router);
Vue.use(iView);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
