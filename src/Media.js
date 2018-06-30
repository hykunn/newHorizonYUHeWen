import React, { Component } from 'react';
import { Player } from 'video-react';
import {Layout, Menu, Icon, Input, Button, List } from 'antd';
import { Link } from 'react-router-dom';
import './video-react.css';
import './HomePage.css';
const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;
const Item = Menu.Item;

class Media extends Component{
	render(){
		return(
			<Layout>
    			<Header className="headerContainer">
    			  <Link to='./home'><div className="logo" /></Link>
			      <Menu
			        onClick={this.handleClick}
			        mode="horizontal"
			        style={{lineHeight:'64px'}}
			      	theme="dark">
			      	<Menu.Item key="index">
			          <Link to='/home'><Icon type="compass" />首页</Link>
			        </Menu.Item>
			        <Menu.Item key="question">
			          <Icon type="smile-o" />问答
			        </Menu.Item>
			        <Menu.Item key="judge">
			          <Icon type="edit" />评测
			        </Menu.Item>
			        <Menu.Item key="downloading">
			          <Icon type="download" />下载中心
			        </Menu.Item>
			        <Menu.Item key="aboutUs">
			          <Icon type="search" />关于我们
			        </Menu.Item>
			        <Search placeholder="input search text" enterButton className="searcher"/>
			        <div className="shopper"><Link to='/Shop'><Button type="primary" className="shopperContainer" shape="circle" >购物车</Button></Link></div>
			        <div className="alarm"><Button  shape="circle" className="alarmContainer" type="primary"><Icon type="notification" style={{fontSize:26}} /></Button></div>
			      </Menu>
			    </Header>
			    <Content>
					<Player
				      playsInline
				      poster="/assets/poster.png"
				      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
				    />
				</Content>
			</Layout>
		);
	}
}

export default Media;