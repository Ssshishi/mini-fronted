import { Layout, Menu, Breadcrumb } from 'antd'
import { useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router'
import { sideData } from '@/utils/constant'

const { Header, Content, Footer, Sider: Side } = Layout

const DefaultLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const navigate = useNavigate()
  const onCollapse = (value: boolean) => {
    setCollapsed(value)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Side collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <img
            alt="赫本女神"
            src="https://lh3.googleusercontent.com/WDiCN0jYNq_OfzjMwu07XJ9KWOa5AuMxeojLCgTrjCeAtBNd1AKAglIrJBNHbynsFY2HCE-gtOZQVrpN0eG7thFmydfv0STKREJhWaeklg=s660"
          />
        </div>
        <Menu mode="inline" theme="dark">
          {sideData.map((item) => (
            <Menu.Item
              key={item.title}
              icon={item.icon}
              onClick={() => item.path && navigate(item.path)}
            >
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </Side>

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0 }}
          title="微前端--qiankun"
        />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Minor</Breadcrumb.Item>
            <Breadcrumb.Item>Next</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            id="minor-container"
            style={{ padding: 24, minHeight: 360 }}
          ></div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout
