const apps = [
  {
    name: 'minor-react',
    entry: '//localhost:7001/micro-react',
    activeRule: '/react',
    container: '#minor-container',
  },
  {
    name: 'minor-umi',
    entry: '//localhost:8001/micro-vite',
    activeRule: '/umi',
    container: '#minor-container',
  },
  {
    name: 'minor-vue',
    entry: '//localhost:9001/micro-vue',
    activeRule: '/vue',
    container: '#minor-container',
  },
]

export default apps
