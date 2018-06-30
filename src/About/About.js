import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import Aboutcontent from './About_content';
import {Aboutus} from '../service';
import axios from 'axios'
const { Header, Content, Footer, Sider } = Layout;
class About extends React.Component {
 // state = {
   // aboutInfo:[1],
   // title:'jincan',
    //loginstatus:false
  //}
  handleClick = (e) => {
 
    console.log('click ', e.key);
    this.setState({MenuKey: e.key});
    //this.state.MenuKey=e.key;
  };
  constructor(props) {
    super(props)
    this.state = {
      MenuKey: 1,
      aboutInfo:[]
    }
  }
  getJsonData = () => {
    Aboutus().then(res => {
      console.log("222222222",res);
      this.setState({aboutInfo:res.data})
    //   var abdata = [];
    //   res.map(function(item){
    //     return(
    //       abdata = item.data
    //     );
    //   })
    //   this.setState({aboutInfo:abdata})
     });
  };
  componentDidMount(){
    var that = this;
    that.getJsonData();
    console.log("jiazai",that.state.aboutInfo);
  }

  getRightContent(MenuKey) {
    
    console.log('123`',MenuKey);
    if (MenuKey == 1){
      console.log("11111",this.state.aboutInfo);
      return <Aboutcontent  aboutdata = {this.state.aboutInfo} dataname={"团队介绍"} datakey={MenuKey}/>;
    }
    else if (MenuKey == 2) {
      return <Aboutcontent  aboutdata = {this.state.aboutInfo} dataname={"师资介绍"} datakey={MenuKey}/>;
      //return <Aboutcontent />;
    } else if (MenuKey == 3) {
      return <Aboutcontent  aboutdata = {this.state.aboutInfo} dataname={"品牌介绍"} datakey={MenuKey}/>;
     // return <Aboutlist />;

    } else if (MenuKey == 4) {
      return <Aboutcontent  aboutdata = {this.state.aboutInfo} dataname={"课程介绍"} datakey={MenuKey}/>;
     // return <Aboutcontent />;
    }

  }

  render() {

    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
          style={{ background: "#cc6600" }}
        >
          <div className="logo" />
          <div>
            <font size="4" color="white"> 简介 </font>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ background: "#cc6600" }} onClick={this.handleClick}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">
                团队介绍
                  </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">
                师资介绍
                  </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span className="nav-text">
                品牌介绍
                  </span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="video-camera" />
              <span className="nav-text">
                课程介绍
                  </span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ background: '#fff', minHeight: 500 }}>
            <div >
              {
                this.getRightContent(this.state.MenuKey)
              }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default About
