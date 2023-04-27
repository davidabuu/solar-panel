import React from "react";
import { Table } from "antd";
import { CheckOutlined } from "@ant-design/icons";
const TableData = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const dataSource = [
    {
      key: "1",
      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "2",
      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "3",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "4",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "12",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "5",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "6",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "7",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "8",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "9",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "10",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "11",

      date: currentDate,
      voltage: "49V",
      current: "55Amp",
      raid: "10Rad",
      qty: 24,
      status: "Status",
    },
  ];

  const columns = [
    {
      title: "Date/Time",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <div style={{ fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Voltage(V)",
      dataIndex: "voltage",
      key: "voltage",
      render: (text) => (
        <div style={{ color: "red", fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Current(Amp)",
      dataIndex: "current",
      key: "current",

      render: (text) => (
        <div style={{ color: "blue", fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Radiance",
      dataIndex: "raid",
      key: "raid",

      render: (text) => (
        <div style={{ color: "orange", fontWeight: "bolder" }}>{text}</div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      showOnResponse: true,
      sortDirections: ["descend", "ascend"],
      showOnDesktop: true,
      render: () => (
        <div style={{ color: "green", fontWeight: "bolder" }}>
          <CheckOutlined />
        </div>
      ),
    },
  ];
  return (
    <div className="table">
      <Table
        columns={columns}
        dataSource={dataSource}
        scroll={{
          x: 100,
        }}
      />
    </div>
  );
};

export default TableData;
