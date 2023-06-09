import React, { FC, useEffect, useState } from "react";
import { Table, notification } from "antd";
import { ref, onValue } from "firebase/database";

import { CheckCircle } from "heroicons-react";
import { generateSensorData } from "./FakeUserData";
import { UserEndpoints } from "@/helper";
import axios from "axios";
import { db } from "../../firebase";
interface Data {
  id: number | undefined;
}
const UserDashboard: FC<Data> = ({ id }) => {
  interface UserData {
    voltage: number;
    current: number;
    radiance: number;
    status: number;
    userId: number;
    getDate: Date;
    setTime: string;
  }
  interface SolarData {
    voltage: number;
    current: number;
  }
  //console.log(dataa);
  const [data, setData] = useState<UserData[]>([]);
  const [solarData, setSolarData] = useState<SolarData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  // const FetchFakeData = async () => {
  // let formData = {
  //   getCurrent: generateRandomValue(16.5, 17.8),
  //   userId: 2,
  //   getDate: generateSensorData().getDate,
  //   voltage: generateRandomValue(4.0, 5.2),
  //   getStatus: generateSensorData().status,
  //   radiance: generateSensorData().radiance,
  //   setTime: generateSensorData().setTime,
  // };
  // try {
  //   setLoading(true);
  //   const res = await axios.post(
  //     `${process.env.API_URL}${UserEndpoints.auth}`,
  //     formData,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   window.location.reload();
  //   console.log(res.data);
  //   setLoading(false);
  //   if (res.data) {
  //     notification.success({
  //       message: "Success",
  //       description: "Registration Success, we will give you a call soon",
  //       duration: 5,
  //     });
  //     setLoading(false);
  //   }
  // } catch (error) {
  //   notification.error({
  //     message: "Error",
  //     description: "",
  //     duration: 2,
  //   });
  //   setLoading(false);
  // }
  // };
  const FetchUserInfo = async (formData: any) => {
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
    // GetUserInfo();
  };
  const GetUserInfo = async () => {
    try {
      const res = await axios.get(
        `${process.env.API_URL}${UserEndpoints.userSolarInfo}/2`
      );
      setData(res.data);
      setLoading(false);
      console.log(res.data);
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Something went wrong, refresh the page",
        duration: 2,
      });
    }
  };
  let formData: any;
  useEffect(() => {
    const fetchData = () => {
      onValue(ref(db), (snapshot) => {
        //setTodos([]);
        if (load == true) {
          console.log(true);
        } else {
          setLoad(true);
          const data = snapshot.val();
          setSolarData(data);
          setLoad(false);
          console.log(solarData, "ooo");
          formData = {
            getCurrent: data.solar.Current,
            userId: 2,
            getDate: generateSensorData().getDate,
            voltage: data.solar.voltage,
            getStatus: 1,
            radiance: generateSensorData().radiance,
            setTime: generateSensorData().getDate,
          };
          console.log(formData);
          setTimeout(fetchData, 5000);
          // setTimeout(FetchUserInfo, 5000)
          //  FetchUserInfo(formData);
        }
      });
    };
    fetchData();

    // setTimeout(() => {
    //   FetchUserInfo(formData);
    // }, 5000);
  }, []);
  GetUserInfo();

  useEffect(() => {
    if (solarData.length == 0) {
      setLoad(true);
    } else {
      setLoad(false);
    }
    console.log(solarData.length);
  }, [solarData.length]);
  // Set up an interval to run fetchData every 5 seconds
  // useEffect(() => {
  // try {
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       `${process.env.API_URL}${UserEndpoints.userSolarInfo}/2`
  //     );
  //     setData(res.data);
  //     setLoading(false);
  //     console.log(res.data);
  //   };

  //   fetchData();
  // } catch (error) {
  //   notification.error({
  //     message: "Error",
  //     description: "Something went wrong, refresh the page",
  //     duration: 2,
  //   });
  // }
  // }, []);

  const columns = [
    {
      title: "Monitoring ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Date",
      dataIndex: "getDate",
      key: "getDate",
      render: (text: any) => (
        <div>{text.toString().split("").splice(0, 10)}</div>
      ),
    },
    {
      title: "Time",
      dataIndex: "setTime",
      key: "setTime",
      render: (text: any) => (
        <div>{text.toString().split("").splice(0, 5).join("") + "PM"}</div>
      ),
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
      title: "Status",
      dataIndex: "getStatus",
      key: "getStatus",
      render: (text: number) => (
        <div style={{ color: "green", fontWeight: "bolder" }}>
          {text === 1 ? (
            <CheckCircle color="green" />
          ) : (
            <CheckCircle color="green" />
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="table w-[100%] px-8">
      {load ? (
        <div>loading....</div>
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          pagination={false}
          rowKey={"current"}
        />
      )}
    </div>
  );
};

export default UserDashboard;
