import React from "react";
import { Table } from "antd";
import { CheckOutlined } from "@material-ui/icons";
const TableDataAdmin = () => {
  const dataSource = [
    {
      key: "1",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      qty: 24,
      status: "Status",
    },
    {
      key: "2",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "3",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "4",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "12",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "5",

      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "6",

      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "7",

      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "8",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "9",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
    {
      key: "10",
      userId: 1,
      firstName: "Abu",
      lastName: "10Rad",
      latitude: 24,
      status: "Status",
    },
  ];

  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "FirstName",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Latitude",
      dataIndex: "latitude",
      key: "latitude",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
      key: "longitude",
    },
    {
      title: "Verified",
      dataIndex: "isVerified",
      key: "isVerified",
      render: () => (
        <div style={{ color: "green", fontWeight: "bolder" }}>
          <CheckOutlined />
        </div>
      ),
    },
  ];
  return (
    <div className="table w-[100%] px-8">
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

export default TableDataAdmin;
