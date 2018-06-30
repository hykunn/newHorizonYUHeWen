import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class GlobalHeader extends React.Component{
  render () {
    return (
      <Menu
        onClick={this.handleClick}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{lineHeight:'64px'}}
        >
        <Menu.Item key="1"><Link to='/home'>首页</Link></Menu.Item>
        <Menu.Item key="2"><Link to='showquestions'>问答</Link></Menu.Item>
        <Menu.Item key="3"><Link to='exam'>评测</Link></Menu.Item>
      </Menu>
    )
  }
}

export default GlobalHeader
