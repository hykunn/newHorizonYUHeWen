import React from 'react';
import Login from './Login';
import Register from './Register';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class AuthPage extends React.Component{
  render(){
    return(
      <Tabs defaultActiveKey="1">
        <TabPane tab="账户密码登录" key="1">
          <Login/>
        </TabPane>
        <TabPane tab="注册新账户" key="1">
          <Register/>
        </TabPane>
      </Tabs>
    );
  }
}
export default AuthPage
