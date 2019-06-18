import header from './component/header';
import contact from './component/contact';
import body from './component/body';

const routes = [
        {
          path: '/',
          component: body
        },
        {
            path: '/header',
            component: header
          },
        {
          path: '/contact',
          component: contact
        }
    ]  ;
  
    export default routes;