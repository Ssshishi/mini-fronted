const apps = [
  {
    name: 'minor-umi',
    entry: '//localhost:6000/micro-umi',
    activeRule: '/umi',
    container: '#minor-view',
  },
  {
    name: 'minor-react',
    entry: '//localhost:7001/micro-react',
    activeRule: '/react',
    container: '#minor-view',
  },
  {
    name: 'minor-vite',
    entry: '//localhost:8000/micro-vite',
    activeRule: '/vite',
    container: '#minor-view',
  },
  {
    name: 'minor-vue',
    entry: '//localhost:9000/micro-vue',
    activeRule: '/vue',
    container: '#minor-view',
  },
]

export default apps
