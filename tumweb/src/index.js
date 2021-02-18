import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Input } from 'antd';

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

ReactDOM.render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Page 1</Menu.Item>
        <Menu.Item key="2">Page 2</Menu.Item>
        <Menu.Item key="3">Page 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 128 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        <TextArea rows={15} />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Morei Victor © 2021, Web Project, TUM</Footer>
  </Layout>,
  document.getElementById('root'),
);