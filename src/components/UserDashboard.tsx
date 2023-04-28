import React, { FC, useEffect, useState } from "react";
import { Button, Skeleton, Table, notification } from "antd";
import { CheckCircle, XCircle } from "heroicons-react";
import { generateSensorData } from "./FakeUserData";
import { UserEndpoints } from "@/helper";
import axios from "axios";

const UserDashboard: FC = () => {
  interface UserData {
    voltage: number;
    current: number;
    radiance: number;
    status: number;
    userId: number;
    getDate: Date;
  }
  const [myID, setId] = useState<string>("");
  //console.log(dataa);
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const FetchFakeData = async () => {
 
    let formData = {
      getCurrent:generateSensorData().current,
      userId: 2,
      getDate:generateSensorData().getDate.getDay,
      voltage:generateSensorData().voltage,
      getStatus:generateSensorData().status,
      radiance:generateSensorData().radiance,
    };
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.API_URL}${UserEndpoints.auth}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.location.reload();
      console.log(res.data);
      setLoading(false);
      if (res.data) {
        notification.success({
          message: "Success",
          description: "Registration Success, we will give you a call soon",
          duration: 5,
        });
        setLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "",
        duration: 2,
      });
      setLoading(false);
    }
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get(
          `${process.env.API_URL}${UserEndpoints.userSolarInfo}/2`
        );
        setData(res.data);
        setLoading(false);
        console.log(res.data);
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
      title: "Date",
      dataIndex: "getDate",
      key: "getDate",
    },
    {
      title: "Voltage(V)",
      dataIndex: "voltage",
      key: "voltage",
    },
    {
      title: "Current(Amp)",
      dataIndex: "getCurrent",
      key: "getCurrent",
    },
    {
      title: "Radiance",
      dataIndex: "radiance",
      key: "radiance",
    },
    {
      title: "Status",
      dataIndex: "getStatus",
      key: "getStatus",
      render: (text: number) => (
        <div style={{ color: "green", fontWeight: "bolder" }}>
          {text === 1 ? <CheckCircle color="green" /> : <XCircle color="red" />}
        </div>
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
        rowKey={"current"}
        // locale={{
        //   emptyText: (
        //     // <Skeleton
        //     //   active
        //     //   paragraph={{ rows: 10 }}
        //     // />
        //   ),
        // }}
      />
      <p onClick={FetchFakeData}>Get New Data</p>
    </div>
  );
};

export default UserDashboard;
