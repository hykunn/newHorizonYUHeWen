import React from 'react';
import { Layout, Menu, Icon, Row, Col,List,Card } from 'antd';
const { Header, Content, Footer, Sider} = Layout;
class Aboutcontent extends React.Component{
  getdatachange(MenuKey,vdata,i) {
    if (MenuKey == 1){
     return vdata[i].teamintro
    }
    else if (MenuKey == 2) {
     return vdata[i].teachersintro
    } else if (MenuKey == 3) {
      return vdata[i].brandintro
    } else if (MenuKey == 4) {
     return vdata[i].lessonsintro
    }

  }
    render(){
      const { aboutdata } = this.props
      
      console.log("aboutdataprops",this.props);

        return (
          <Layout>
          <Content style={{ background: '#fff', minHeight: 50 }}>
          <div>
                <font size="6" color="#cc6600"> {this.props.dataname} </font>   
                <br/> <br/> <br/>
          </div>
          {
          <List 
          className="showcase"
          rowKey="id"
          grid={{column:1,lg:1,md:1,sm:1,xs:1}}
          dataSource={[...aboutdata]}
          renderItem={v=>
                <div>
                  
                  <h1> 
                  {
                    this.getdatachange(this.props.datakey,this.props.aboutdata,0)
                  }
                  </h1>
                  <br/>
                  <h3> 
                  {
                    this.getdatachange(this.props.datakey,this.props.aboutdata,1)
                  }
                  </h3>
                </div>
            }
          /> 
          }
            
              {/* {aboutdata.map((aboutdata) => <aboutdata {...aboutdata} key={aboutdata.teamintro}/>) */}

          {
            /* 
            <Row>
            <Col span={8}></Col>
            <Col span={8}>
              <img src={timg}  style={{width: 480,Height: 50}}/> 
            </Col>
            <Col span={8}></Col>
          </Row> */}
          </Content>{/* 
          <Content style={{ background: '#fff', minHeight: 50 }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </Content> */}
        </Layout>    
        );
    }
}
export default Aboutcontent
