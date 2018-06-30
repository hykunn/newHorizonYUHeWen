import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Button, List, Row, Col, Checkbox, Card} from 'antd';
import { Link } from 'react-router-dom';
import { queryLessons } from './server'
import ClassCard from './ClassCard'
import './ClassCard.css';
import './Classfication.css'
import './HomePage.css'
const { Header, Content, Sider, } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;
const Item = Menu.Item;
const { Meta } = Card;
class Classfication extends Component {
	state = {
		lessons:[]
	}
	
	componentDidMount() {
    var that = this;
    that.getJsonData();
   }
	
	getJsonData = () => {
    queryLessons().then(res => {
      this.setState({lessons:res})
      console.log(res)
    });
  	};
  	
	handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  	callback(key) {
  console.log(key);
  }

  render() {
    return (
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
		    <Content className="listContent">
		    	<div className="classList">
		    		<div className="listHeader">
		    			<h2 id="classTitle">课程列表</h2>
		    			<div className="buttonGroup">
		    				<ButtonGroup>
		    					<Button>查看公开课</Button>
		    					<Button>查看精选课程</Button>
		    				</ButtonGroup>
		        		</div>
		    		</div>
		    		<div className="list">全部分类</div>
		    		<div className="list" id="list1">
		    			<Row gutter={4}>
		    				<Col span={2}>分类:</Col>
		    				<Col span={2}>春季班</Col>
		    				<Col span={2}>秋季班</Col>
		    				<Col span={2}>直播课程</Col>
		    				<Col span={2}>视频课程</Col>
		    			</Row>
		    		</div>
		    		<div className="list">
		    			<Row gutter={4}>
		    				<Col span={2} offset={2}>初一</Col>
		    				<Col span={2}>初二</Col>
		    				<Col span={2}>初三</Col>
		    			</Row>
		    		</div>
		    	</div>
		    	<div className="choose">
		    		<Button size={'large'} className="button">最新</Button>
		    		<Button size={'large'} className="button">最热</Button>
		    		<Button size={'large'} className="button">推荐</Button>
		    		<Checkbox className="checkBox">直播课程</Checkbox>
		    		<Checkbox className="checkBox">免费课程</Checkbox>
		    	</div>
		    	<div className="classCard">
					<ClassCard imagecard = {this.state.lessons} />
					<ClassCard imagecard = {this.state.lessons} />
		    	</div>
		    </Content>
		</Layout>
	);
  }
};

export default Classfication;