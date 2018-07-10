import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Input, Icon, Button, Popconfirm,Row,Col } from 'antd';
import {getOrder} from '../service';
import "./shopping.css"
// import axios from 'axios'
function getNameRender(text) {
  return <p className="uk-clearfix">
      <img className=" uk-thumbnail uk-align-medium-left img_hw" src={text.url} alt=""  />
      {text.name}
  </p>;
}

// axios.defaults.baseURL = "http://47.106.72.161:10000";

class ShoppingOrder extends React.Component {
  totalSum=0;
  getOrderData = (pram) => {
    console.log("pram",pram);
    getOrder(pram).then(res => {
      console.log("res",res);
      this.setState({data:res});
      console.log("data1",this.state.data);
      this.onShowData();
      console.log("dataSource",this.state.dataSource);
      this.setState({data:res});
     });
     
  };
  componentDidMount(){
    var that = this;
    console.log(this.props);
    that.getOrderData(this.props.match.params.orderid);
  }

  constructor(props) {
    super(props);
    this.columns = [{
      title: '商品信息',
      dataIndex: 'productname',
      width: '30%',
      render: text => getNameRender(text),
    }, {
      title: '单价',
      dataIndex: 'price',
    }, {
      title: '数量',
      dataIndex: 'num',
    }, {
      title: '金额',
      dataIndex: 'cost',
    }];

    this.state = {
    //**************************************************** */
      dataSource: [],
      data:[],
    //**************************************************** */
    };

  }
  //**************************************************** */
  onShowData=()=>{
    if(this.state.data[0]!=null){
      this.totalSum=this.state.data[0].total;
      for (let i = 0; i < this.state.data.length; i++) {
          
        console.log("执行了添加");
      
        this.state.dataSource.push({
              key: i,
              productname: {
                  'name':this.state.data[i].productname ,
                  'url':this.state.data[i].img 
              },
              price: this.state.data[i].price,
              num: this.state.data[i].quantity,
              cost: this.state.data[i].price*this.state.data[i].quantity,
          });
        }
    }
    };
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div className="ShoppingDiv">
        <div>
          <img className="img_logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531112377193&di=f6dfc5750fec2a15b8ed2da6f6854fef&imgtype=0&src=http%3A%2F%2Fpicapi.zhituad.com%2Fphoto%2F12%2F81%2F67BAB.jpg" alt="" />
          <font size="5"> 确认订单信息</font>
        </div>
        <Table dataSource={dataSource} columns={columns}/>
        
        <div align="right">
        <h3>总价格：{this.totalSum}</h3>
        </div>
        <div align="right">
          <Button 
          //onClick={this.handleAdd}
          type="primary" style={{ marginBottom: 16,marginRight:0}}  >
            提交订单                                    
          </Button> 
        </div>
      </div>
    );
    
  }
}


export { ShoppingOrder };