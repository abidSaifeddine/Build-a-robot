import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router( {
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./components/home/HomePage')
        },
        {
            path: '/build',
            name: 'Build',
            component: () => import('./components/builder/RobotBuilder')
        },
        {
          path: '/part/browse',
          name: 'BrowseParts',
          component: () => import('./components/parts/BrowseParts'),
          children: [
              {
                  path: 'heads',
                  name: 'Heads',
                  component: () =>
                      import('./components/parts/RobotHeads')
              },
              {
                  path: 'arms',
                  name: 'Arms',
                  component: () =>
                      import('./components/parts/RobotArms')
              },
              {
                  path: 'torsos',
                  name: 'Torsos',
                  component: () =>
                      import('./components/parts/RobotTorsos')
              },
              {
                  path: 'bases',
                  name: 'Bases',
                  component: () =>
                      import('./components/parts/RobotBases')
              }
          ]
        },
        {
            path: '/part/:partType/:id',
            name: 'Part',
            component: () => import('./components/parts/PartDetails'),
            props: true
        }
    ]
})
