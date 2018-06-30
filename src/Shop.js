import React, { Component } from 'react';
import {Layout, Menu, Icon, Input, Tabs, Button, List, Table, Divider} from 'antd';
import { Link } from 'react-router-dom';
import './Shop.css';
import './HomePage.css'
const { Header, Content, Sider, Footer} = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const { Column, ColumnGroup } = Table;
const data = [{
  key: '1',
  info: '正版Python数据科学手册 数据分析计算书籍 机器学习 NumPy数据存储 Matplotlib数',
  price: 200,
  amount: 1,
  pic: <img salt="example" src={require("./pic/u644.png")} />
}, {
  key: '2',
  info: '正版Python数据科学手册 数据分析计算书籍 机器学习 NumPy数据存储 Matplotlib数',
  price: 200,
  amount: 1,
  pic: <img salt="example" src={require("./pic/u644.png")} />
}, {
  key: '3',
  info: '正版Python数据科学手册 数据分析计算书籍 机器学习 NumPy数据存储 Matplotlib数',
  price: 200,
  amount: 1,
  pic: <img salt="example" src={require("./pic/u644.png")} />
}];

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
	    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
};


class Shop extends Component {

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
		    <Content className="shopContent">
		    	<div className="iconContainer">
		    		<div id="shopIcon"><Icon type="shopping-cart" style={{ fontSize: 80, color: '#08c' }} /></div>
		    		<h1 id="h1">购物车</h1>
		    	</div>
		    	<div className="shopContainer">
		    		<Table dataSource={data} rowSelection={rowSelection}>
		    			<Column
					        title="全选"
					        dataIndex="pic"
					        key="pic"
					    />
						<Column
					        title="商品信息"
					        dataIndex="info"
					        key="info"
					    />
						<Column
						    title="单价"
						    dataIndex="price"
						    key="price"
						/>
						<Column
						    title="数量"
						    dataIndex="amount"
						    key="amount"
						/>
						<Column
						    title="金额"
						    dataIndex="price"
						    key="cost"
						/>
						<Column
						    title="操作"
						    key="action"
						    render={(text, record) => (
						    <span>
						        <a href="javascript:;">移入收藏夹</a>
						        <Divider type="vertical" />
						        <a href="javascript:;">删除</a>
						    </span>
						    )}
						/>
		    		</Table>
		    	</div>
		    </Content>
		    <Footer className="shopFooter">
		    	<div>
		    		 <Button type="primary" id="pay">结算</Button>
		    		 <h2 id="summary">合计0元</h2>
		    		 <h2 id="choosen">已选商品0件</h2>
		    		 <h2 id="delete">删除</h2>
		    	</div>
		    </Footer>
			</Layout>
		);
	}
}

export default Shop;