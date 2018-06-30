import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

import '../css/uikit.almost-flat.min.css'

function getNameRender(text) {
    return <p class="uk-clearfix">
        <img class=" uk-thumbnail uk-align-medium-left" src={text.url} alt="" />
        {text.name}
    </p>;
}

const columns = [{
    title: '商品信息',
    dataIndex: 'discribe',
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
}
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        discribe: {
            'name': '丹尼尔惠灵顿（DanielWellington）奚梦瑶明星同款DW女表三色尼龙带36mm金边超薄石英表0502DW（DW00100030）',
            'url': 'https://img13.360buyimg.com/n1/jfs/t5797/185/3901179062/159833/b41a460f/5966d0c0N650608a5.jpg'
        },
        price: 99.9,
        num: 9,
        cost: 1000,
        operation: `London, Park Lane no. ${i}`,
    });
}

class ShoppingCart extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };
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
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        Reload
                    </Button>

                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        );
    }
}
export { ShoppingCart };