import React, { Component, propsType } from 'react';
import {Layout, Menu, Icon, Input, Tabs, Button, List, Divider, Avatar, Steps} from 'antd';
import { Link } from 'react-router-dom';
import { axios } from 'axios'
import './HomePage.css';
import './ClassDetail.css'
const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const Step = Steps.Step;

const data2 = [
{
	title: 'Teacher1',
	description: 'description1'
},{title: 'Teacher2',
	description: 'description2'
}];

class classDetail extends Component {
	
	state={
		current:''
	}
	
	handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  	callback(key) {
  console.log(key);
  }
  	render(){
  		console.log(this.props.location.data)
  		return(
		  	<Layout className="father">
				<Header className="headerContainer" style={{height:'64px'}}>
			      <Menu
			        onClick={this.handleClick}
			        selectedKeys={[this.state.current]}
			        mode="horizontal"
			        style={{lineHeight:'64px'}}
			      	theme="dark"
			      	className="headerMenu">
			      	<div className="login">
			      		请<a>登录</a>,或<a>注册</a>
			      	</div>
			      	<Menu.Item key="index" className="index">
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
			        <div className="shop">
			        	<Icon type="shopping-cart" id="shopIcon"/>
			        	<div id="shopText">购物车</div>
			        </div>
			      </Menu>
		        </Header>
				<Content className="infoContent">
					<div className="classInfo">
						<h1>课程名称</h1>
						<img alt="pic loading error" src={this.props.location.data.image} id="classPic" />
						<div id="detailList">
							<div className="detailContent"><h2>价格:  {this.props.location.data.price}</h2></div>
							<Divider className="divider"/>
							<div className="detailContent"><h2>年级:  {this.props.location.data.describe}</h2></div>
							<Divider className="divider"/>
							<div className="detailContent"><h2>人数:</h2></div>
							<Divider className="divider"/>
							<div className="detailContent"><h2>时长:</h2></div>
							<Divider className="divider"/>
						</div>
					    <Link to='./Media'><Button type="primary" size="large" id="study">开始学习</Button></Link>
					</div>
					<div className="Introduction">
						<div className="classIntroduction">
							<h2>介绍</h2>
							<Divider />
							<h4>{ this.props.location.data.describe }</h4>
						</div>
						<div className="teacher">
							<h2>授课教师</h2>
							<Divider />
							<List
							    itemLayout="horizontal"
							    dataSource={data2}
							    renderItem={item => (
							      <List.Item>
							        <List.Item.Meta
							          title={item.title}
							          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
							          description={item.description}
							          className="teacherList"
							        />
							      </List.Item>
							    )}
							/>
						</div>
						<div className="catalogue">
							<h2>目录</h2>
							<Divider/>
							<Steps direction="vertical" size="large" current={0}>
							    <Step title="Introduction" description="This is a description." />
							    <Step title="第一章" description="This is a description." />
							    <Step title="第二章" description="This is a description." />
							    <Step title="第三章" description="This is a description." />
							</Steps>
						</div>
						<div className="teacherInfo">
							<h2>教师介绍</h2>
							<Divider/>
						</div>
					</div>
				</Content>
			</Layout>
  		);
  	}
}

export default classDetail;