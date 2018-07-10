import React from 'react';
import { Link  } from 'react-router-dom';
import { Table, Input, Icon, Button, Popconfirm, Row, Col } from 'antd';
import "./shopping.css"
import { getShopping, deleteShopping, postOrder } from '../service';
import axios from 'axios'

import createHistory from 'history/createBrowserHistory';

const hashHistory=new createHistory();
function getNameRender(text) {
  return <p className="uk-clearfix">
    <img className=" uk-thumbnail uk-align-medium-left img_hw" src={text.url} alt="" />
    {text.name}
  </p>;
}

class Shopping extends React.Component {
  
  timestamp = null; 
  //****************************写入订单表*******************/
  Creatorder = (orderData) => {
    var orderJson = JSON.stringify(orderData);
    console.log("orderJson", orderData);
    postOrder(orderData).then(res => {
      console.log(res)
      var response = res.success;
      console.log(response);
      if (response) {
        console.log('post success')
      }
      else {
        console.log("post failed")
      }
    });
  }
  //****************************写入订单表*******************/


  //**********************读取数据****************************** */

  getJsonData = (pram) => {

    console.log("pram", pram);
    getShopping(pram).then(res => {
      console.log("res", res);
      this.setState({ data: res });
      console.log("data1", this.state.data);
      this.onShowData();
      console.log("dataSource", this.state.dataSource);
      this.setState({ data: res });
    });

  };
  componentDidMount() {
    var that = this;
    that.getJsonData("1");
  }
  //**********************读取数据****************************** */
  //*********************提交订单删除数据库内容******************************* */

  DeleteGoods = (pram) => {
    deleteShopping(pram).then(res => {
      var response = res.message;
      if (response === "remove succeed") {
        console.log("delete");
        window.location.reload();
      }
    });
    console.log("调用该函数");
  }

  //*********************提交订单删除数据库内容******************************* */
  //**************************************************** */


  start = () => {

    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }


  //**************************************************** */


  constructor(props) {
    super(props);

    this.columns = [{
      title: '商品信息',
      dataIndex: 'name',
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
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        console.log("record", record.key);
        return (
          this.state.dataSource.length > 0
            ? (
              <Popconfirm title="是否删除?" onConfirm={() => this.onDelete(record.key)}>
                <a href="javascript:;">删除</a>
              </Popconfirm>
            ) : null
        );
      },
    }];

    this.state = {

      //**************************************************** */
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      dataSource: [],
      data: [],
      Order: [],
      //**************************************************** */
      count: 2,
    };

  }

  onShowData = () => {

    for (let i = 0; i < this.state.data.length; i++) {

      console.log("执行了添加");

      this.state.dataSource.push({
        key: i,
        name: {
          'name': this.state.data[i].productname,
          'url': this.state.data[i].img
        },
        price: this.state.data[i].price,
        num: this.state.data[i].quantity,
        cost: this.state.data[i].price * this.state.data[i].quantity,
      });
    }

  }


  // onCellChange = (key, dataIndex) => {
  //   return (value) => {
  //     const dataSource = [...this.state.dataSource];
  //     const target = dataSource.find(item => item.key === key);
  //     if (target) {
  //       target[dataIndex] = value;
  //       this.setState({ dataSource });
  //     }
  //   };
  // }

  //**************************************************** */
  // placeOrder = () => {
  //   for(let i = 0 , k = 0; i < this.state.selectedRowKeys.length; i++){
  //     this.state.Order.push(this.state.dataSource[this.state.selectedRowKeys[i]]);

  //     console.log("selectedRowKeysresult",this.state.selectedRowKeys[i]);

  //     this.state.dataSource.splice(this.state.selectedRowKeys[i]-k,1);
  //     k++;
  //   }
  //   this.setState({dataSource:this.state.dataSource})
  //  // return  this.state.Order;
  // };
  //**************************************************** */

  //***********************添加至订单***************************** */
  placeOrder = () => {
    
    var priceSum=0;
    this.timestamp = (new Date()).valueOf(); 
    
    for (let i = 0, k = 0; i < this.state.selectedRowKeys.length; i++) {
      priceSum+=this.state.data[this.state.selectedRowKeys[i]].price*this.state.data[this.state.selectedRowKeys[i]].quantity;
    }
    for (let i = 0, k = 0; i < this.state.selectedRowKeys.length; i++) {
      // this.state.Order.push(this.state.data[this.state.selectedRowKeys[i]]);

      this.state.Order.push({
        userid: this.state.data[this.state.selectedRowKeys[i]].userid,
        orderid: this.timestamp,
        productname: this.state.data[this.state.selectedRowKeys[i]].productname,
        productid: this.state.data[this.state.selectedRowKeys[i]].productid,
        // key: i,
        //name: {
        //   'name':this.state.data[i].productname ,
        //   'url':this.state.data[i].img 
        // },
        price: this.state.data[this.state.selectedRowKeys[i]].price,
        quantity: this.state.data[this.state.selectedRowKeys[i]].quantity,
        total:priceSum,
        // cost: this.state.data[i].price*this.state.data[i].quantity,
      });
      console.log("this.state.data", this.state.Order);
      this.Creatorder(this.state.Order[i]);
      this.DeleteGoods(this.state.data[this.state.selectedRowKeys[i]]._id);
      // this.state.dataSource.splice(this.state.selectedRowKeys[i]-k,1);
      // k++;
    //  hashHistory.push({
    //     pathname: '/shoppingOrder/',
    //     query: {
    //       orderid:this.timestamp,
    //     },
    //   })		
    }
    this.props.history.push('/shoppingOrder/'+this.timestamp);
    //console.log("this.state.Order",this.state.Order);
    this.setState({ dataSource: this.state.dataSource })
    // return  this.state.Order;
  };
  //**************************************************** */
  onDelete = (key) => {
    // const dataSource = [...this.state.dataSource];
    //this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    this.DeleteGoods(this.state.data[key]._id);
    window.location.reload();
  };



  //**************************************************** */

  render() {

    //**************************************************** */

    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    //**************************************************** */


    //  const dataSource = [];
    // for(var item in this.state.dataSource)
    // {
    //   dataSource.push(item)
    // }
    // console.log(dataSource)
    const columns = this.columns;

    console.log("dataSource", this.state.dataSource);
    return (

      <div className="ShoppingDiv">
        <div>
          <img className="img_logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531112377193&di=f6dfc5750fec2a15b8ed2da6f6854fef&imgtype=0&src=http%3A%2F%2Fpicapi.zhituad.com%2Fphoto%2F12%2F81%2F67BAB.jpg" alt="" />
          <font size="5"> 购物车</font>
        </div>
        {console.log("dataSourceTable", this.state.dataSource)}

        <Table rowSelection={rowSelection} dataSource={this.state.dataSource} columns={columns} />
        <div align="right">
          <div>
            <span style={{ marginLeft: 8 }}>
              <font size="3">{hasSelected ? `选择了 ${selectedRowKeys.length} 件商品` : ''}</font>
              {/* {console.log("selectedRowKeys",selectedRowKeys)}
                {console.log("dataSource1",this.state.dataSource)} */}
            </span>
         </div>
          <Button
            onClick={this.placeOrder}
            //onClick={this.handleAdd}
            type="primary" style={{ marginBottom: 16, marginRight: 0 }}  >
            结算
          </Button>
        </div>
      </div>
    );

  }
}


export { Shopping };