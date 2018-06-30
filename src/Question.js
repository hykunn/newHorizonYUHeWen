import React, { Component } from 'react';
import { Layout, Icon, Row, Col, Input, Button } from 'antd';
import { creatQuestion } from './service';
const { TextArea } = Input;
const { Header, Content } = Layout;

class Question extends Component {
  state = {
    question_titile: "",
    question_body: ""
  }
  title = (e) => {
    let value = e.target.value;
    this.setState({question_titile: value});
  }
  body = (e) => {
    let value = e.target.value;
    this.setState({question_body: value});
  }
  onclick = () => {
    creatQuestion(
      {
        title: this.state.question_titile,
        body: this.state.question_body
      }
    ).then(res => {
      var response = res.message;
      if (response === "succeed") {
        this.props.history.push('/showquestions');
      }
    })
  };
 render(){
    return(
    <div>
        <Layout>
        <Header>Header</Header>
        <Content>
            <Layout>
                <Content>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                    <br/>
                    <h1><Icon type="question-circle-o" style={{ fontSize: 35, color: '#08c' }} />    提问</h1></Col>
                    <Col span={8}></Col>
                </Row>
                </Content>
                <Content>
                    <Row>
                        <Col span={8}></Col>
                        <Col span={8}>
                            <Input onChange={this.title} size="large" placeholder="标题：请写下你的问题" />
                            <div style={{ margin: '24px 0' }} />
                          <TextArea onChange={this.body} placeholder="详细说明你的问题以便获得更好的答案" autosize={{ minRows: 6, maxRows: 12 }} /><br/><br/>
                            <Button icon="file-jpg" /><p>上传图片以便获得更好的答案</p>
                          <Button type="primary" onClick = {this.onclick}>上传问题</Button>
                        </Col>
                        <Col span={8}></Col>
                    </Row>
                </Content>
            </Layout>
        </Content>
        </Layout>
    </div>
   );
 }
}

export default Question;
