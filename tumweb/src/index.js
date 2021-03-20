import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Input } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

ReactDOM.render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      
      <Router>
      <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/dashboard">Dashboard</Link></Menu.Item>
      </Menu>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
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


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}