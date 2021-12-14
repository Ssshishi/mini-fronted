import {
  // DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons'
import { ReactNode } from 'react'

interface SideType {
  icon?: ReactNode
  title?: string
  itemGroups?: Array<SideType>
  path?: string
  item?: Array<SideType>
}

export const sideData: SideType[] = [
  // {
  //   icon: <DesktopOutlined />,
  //   title: 'minor-next',
  //   path: '/minor-next',
  // },
  {
    icon: <FileOutlined />,
    title: 'minor-react',
    path: '/minor-react',
  },
  {
    icon: <PieChartOutlined />,
    title: 'minor-umi',
    path: '/minor-umi',
  },
  {
    icon: <TeamOutlined />,
    title: 'minor-vue',
    path: '/minor-vue',
  },
  // {
  //   icon: <UserOutlined />,
  //   title: 'minor-vite',
  //   path: '/minor-vite',
  // },
]
