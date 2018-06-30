import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Row, Col, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import ContentList from './ContentList';

const { Header, Content, Footer } = Layout;
class ShowQuestion extends Component {
    render() {
      return(
      <div>
      <Layout className="layout">
      <Header >
      <div className="header">
          <Row>
            <Col span={4}>问题搜索</Col>
            <Col span={4}></Col>
            <Col span={4}></Col>
            <Col span={6}><Input placeholder="请输入关键字" /></Col>
            <Col span={3}>
            <Row>
                <Col span={2}>
                </Col>
                <Col span={12}>
                  <Button type="primary" icon="search">搜索答案</Button>
                </Col>
              </Row>
            </Col>
            <Col span={3}>
                <Col span={2}>
                </Col>
                <Col span={12}>
                <NavLink to="/questions"><Button icon="question-circle">我要提问</Button></NavLink>
                </Col>
            </Col>
        </Row>
      </div>
      </Header>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">推荐</Menu.Item>
          <Menu.Item key="2">最新</Menu.Item>
          <Menu.Item key="3">等待回答</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <ContentList/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        EduCation ©2016 Created by Thorn Sun
      </Footer>
    </Layout>
    </div>
    );
  }
}

export default ShowQuestion;
