import About from './about'
import Top from './top'
// routes.js
export default [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
]