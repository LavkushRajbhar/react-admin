/** @format */

import React from "react";
import { BsArrowDownRight } from 'react-icons/bs';
import { Chart } from 'react-google-charts';
import { Table } from "antd";

// Data for Google Chart
export const data = [
  ["Month", "Sales", { role: "style" }],
  ["Jan", 8.94, "gold"], // RGB value
  ["Feb", 10.49, "gold"], // English color name
  ["March", 19.3, "gold"],
  ["April", 21.45, "color: #ffd333"], // CSS-style declaration
  ["May", 2.45, "color: #ffd333"], // CSS-style declaration
  ["June", 28.45, "color: #ffd333"], // CSS-style declaration
  ["July", 35.45, "color: #ffd333"], // CSS-style declaration
  ["Aug", 19.45, "color: #ffd333"], // CSS-style declaration
  ["sep", 51.45, "color: #ffd333"], // CSS-style declaration
  ["Oct", 11.45, "color: #ffd333"], // CSS-style declaration
  ["Nov", 31.45, "color: #ffd333"], // CSS-style declaration
  ["Dec", 25.45, "color: #ffd333"], // CSS-style declaration
];
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    product: 32,
    status: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    product: 42,
    status: '10 Downing Street',
  },
];

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



const Dashboard = () => {
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-around align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0 sub-title">$1000</h4>
          </div>
          <div className="d-flex align-items-end flex-column ">
            <h6 className="green"><BsArrowDownRight className="me-1" />32%</h6>
            <p className="mb-0 desc">Compared To April 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0 sub-title">$1000</h4>
          </div>
          <div className="d-flex align-items-end flex-column ">
            <h6 className="red"><BsArrowDownRight className="me-1" />32%</h6>
            <p className="mb-0 desc">Compared To April 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
          <div>
            <p className="">Total</p>
            <h4 className="mb-0 sub-title">$1000</h4>
          </div>
          <div className="d-flex align-items-end flex-column ">
            <h6 className="green" ><BsArrowDownRight className="me-1" />32%</h6>
            <p className="mb-0 desc">Compared To April 2024</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-4 w-100">
          <h3 className="mb-5 title">Income Statics</h3>
          <div>
            {/* Google Chart */}
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={data}
            />
          </div>
        </div>
        <div className="mt-4 flex-grow-1 w-100">
          <h3 className="mb-4 title">Recent Orders</h3>
          <div>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4 title">Recent Reviews</h3>
        <div className="">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
