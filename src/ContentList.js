import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { queryQuestion } from './service';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ContentList extends React.Component {
  state = {
    questions: [],
  }
  componentDidMount() {
    var that = this;
    that.getJsonData();
  }
  getJsonData = () => {
    queryQuestion().then(res => {
      this.setState({questions:res})
    });
  }
      render() {
        let questionContent = this.state.questions;
        return (
            <List
            itemLayout="vertical"
            size="large"
            dataSource={[...questionContent]}
            pagination={{
              pageSize: 20,
              current:1,
              showSizeChanger:true,
              total: questionContent.length,
              onChange: ((current,pageSize) => {}),
            }}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.body}
                />
                {item.content}
              </List.Item>
            )}
          />
        );
      }
}
export default ContentList ;
