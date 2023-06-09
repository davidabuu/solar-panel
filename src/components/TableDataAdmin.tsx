import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Skeleton, Table, notification } from "antd";
import axios from "axios";
import { AdminEndpoints } from "@/helper";
import { DownOutlined } from "@ant-design/icons";
import VerifyUserModal from "./VerifyUserModal";
import MonitoringDataModel from "./MonitoringDataModel";
import PowerPlantModel from "./PowerPlantModel";
const TableDataAdmin = () => {
  interface UserData {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
    latitude: number;
    longitude: number;
    phoneNumber: string;
    isVerified: boolean;
    userId: number;
    userMonitoringDevice: boolean;
    userPowerPlantData: boolean;
  }

  const handleMenuClick = (user: UserData, action: string) => {
    // Handle the menu click here
  };
  const [monitoringModal, showMonitoringModal] = useState<boolean>(false);
  const [powerPlantModal, showPowerPlantModal] = useState<boolean>(false);
  const ShowMonitoringModal = () => {
    showMonitoringModal(!monitoringModal);
  };
  const PowerPlantModal = () => {
    showPowerPlantModal(!powerPlantModal);
  };
  const renderMenu = (user: UserData) => {
    console.log(user.userMonitoringDevice);
    return (
      <Menu onClick={(e) => handleMenuClick(user, e.key)}>
        <Menu.Item
          style={{ background: "orange", marginBottom: "10px", color: "white" }}
          key={user.userId}
        >
          View User Dashboard
        </Menu.Item>
        {!user.isVerified ? (
          <Menu.Item
            className="menu"
            key={user.userId}
          >
            <VerifyUserModal key={user.userId} />
          </Menu.Item>
        ) : (
          ""
        )}
        {!user.userMonitoringDevice ? (
          <Menu.Item
            className="menu"
            onClick={ShowMonitoringModal}
            key={user.userId}
          >
            <MonitoringDataModel id={user.userId} />
          </Menu.Item>
        ) : (
          <div>
            <MonitoringDataModel id={user.userId} />
          </div>
        )}
        {!user.userPowerPlantData ? (
          <Menu.Item
            className="menu"
            onClick={PowerPlantModal}
            key={user.userId}
          >
            <PowerPlantModel id={user.userId} />
          </Menu.Item>
        ) : (
          <div>
            <PowerPlantModel id={user.userId} />
          </div>
        )}
      </Menu>
    );
  };
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `${process.env.API_URL}${AdminEndpoints.getUsers}`
        );
        setData(res.data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong, refresh the page",
        duration: 2,
      });
    }
  }, []);

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
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
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
      render: (text: boolean) => (
        <div style={{ color: "green", fontWeight: "bolder" }}>
          {text ? (
            <Button
              type="primary"
              className=" bg-green-500 hover:bg-green-500 text-white"
            >
              Verified
            </Button>
          ) : (
            <Button className="bg-red-500 text-white">Not Verified</Button>
          )}
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, record: UserData) => (
        <Dropdown
          key={record.userId}
          overlay={renderMenu(record)}
          trigger={["click"]}
          placement="bottomRight"
          arrow
        >
          <a
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
            <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="table w-[100%] px-8">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={false}
        rowKey={"userId"}
        locale={{
          emptyText: (
            <Skeleton
              active
              paragraph={{ rows: 10 }}
            />
          ),
        }}
      />
    </div>
  );
};

export default TableDataAdmin;
