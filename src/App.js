import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <Header />
        <Layout>
          <Content style={{ margin: 40 }}>
            <Row>
              <Col span={16}>
                <BrowserRouter>
                  <Switch>
                    <Route component={Home} path="/" />
                  </Switch>
                </BrowserRouter>
              </Col>
              <Col span={8}>
                <SideBar />
              </Col>
            </Row>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>some footer</Footer>
      </Layout>
    );
  }
}

export default App;
