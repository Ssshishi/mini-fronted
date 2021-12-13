import store from '@/store'

const microApps = [
  {
    name: 'minor-next',
    entry: '',
    activeRule: '/next',
    container: '#minor-view',
  },
  {
    name: 'minor-umi',
    entry: '',
    activeRule: '/umi',
    container: '#minor-view',
  },
  {
    name: 'minor-web',
    entry: '',
    activeRule: '/web',
    container: '#minor-view',
  },
  {
    name: 'minor-vite',
    entry: '',
    activeRule: '/vite',
    container: '#minor-view',
  },
  {
    name: 'minor-vue',
    entry: '',
    activeRule: '/vue',
    container: '#minor-view',
  },
]

const apps = microApps.map((item) => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState,
    },
  }
})

export default apps
