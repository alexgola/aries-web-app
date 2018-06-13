import asyncComponent from '../components/AsyncComponent'

export const createRouteObj = ({ path = '', exact = true, component = '', ...rest }) => ({
  path,
  exact,
  component,
  ...rest,
})

export const createRoutes = store => ({
  routes: [
    createRouteObj({
      path: '/',
      exact: true,
      component: asyncComponent(() => import('./Checklists').then(module => module.default(store))),
    }),
  ],
})

export default createRoutes
