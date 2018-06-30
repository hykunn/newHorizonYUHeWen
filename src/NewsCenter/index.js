import React from 'react';
import { Link } from 'react-router-dom';
import { List, Carousel, Tabs, Layout, Row, Col } from 'antd';

import './newscenter.css'
import './uikit.min.css'

const TabPane = Tabs.TabPane;
const { Header, Footer, Sider, Content } = Layout;

class NewsContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgs: this.getImgsByClass(props.cid),
            titles: this.getTitlesByClass(props.cid)
        };
    }
    getImgsByClass(cid) {
        return [
            { 'nid': '1', 'nImgUrl': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' },
            { 'nid': '2', 'nImgUrl': 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' }
        ];
    }
    getTitlesByClass(cid) {
        return [
            'Racing car sprays burning fuel into crowd.',
            'Japanese princess to wed commoner.',
            'Australian walks 100km after outback crash.',
            'Man charged over missing wedding girl.',
            'Los Angeles battles huge wildfires.',
        ];
    }
    render() {
        return (
            <Layout >
                <Content >
                    <Carousel autoplay > {
                        this.state.imgs.map(function (item) {
                            return <Link to={item.nid} > < img src={item.nImgUrl}/> </Link >;
                        })
                    }

                    </Carousel>
                </Content>
                <Content ><List bordered dataSource={this.state.titles}
                    renderItem={item => (< List.Item > < Link to='#' > {item} </Link><span class='uk-float-right'>2018-05-19</span></List.Item >)} />
                </Content>
            </Layout>
        );
    }
}
class BasedNewsCenter extends React.Component {
    render() {
        const data = [
            '教育动态',
            '校区动态',
        ];
        return (
            <div >
                <Layout >
                    <Header > Header </Header>
                    <Content >
                        <Row type="flex" justify="center" >
                            <Col span={17} >
                                <Tabs tabPosition='left'>
                                    {
                                        data.map(function (item, index) {
                                            return <TabPane tab={item} key={index + 1} >
                                                < NewsContent cid={index} />
                                            </TabPane >;
                                        })
                                    }
                                </Tabs>
                            </Col>
                        </Row>
                    </Content>
                    <Footer > Footer </Footer>
                </Layout>
            </div>
        );
    }
}
export { BasedNewsCenter };
