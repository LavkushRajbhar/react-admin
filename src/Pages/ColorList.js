import React from 'react'
import { Table } from "antd";


const columns = [
    {
        title: 'SNo',
        dataIndex: 'key',

    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
];
const data1 = [];
for (let i = 0; i < 10; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: `Product ${i}`,
        status: `Status ${i}`,
    });
}
const ColorList = () => {
    return (
        <div><h3 className="mb-4 title">Color List</h3>
            <div>
                <Table dataSource={data1} columns={columns} />
            </div>
        </div>
    )
}

export default ColorList