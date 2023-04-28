import UserDashboard from "@/components/UserDashboard";
import UserWebLayout from "@/components/UserWebLayout";
import { UserEndpoints } from "@/helper";
import { Spin } from "antd";
import axios from "axios";
import { emit } from "process";
import React, { useEffect, useState } from "react";
const Dashboard = () => {
  // interface DataInfo {
  //   firstName: string;
  //   lastName: string;
  //   userId: string;
  // }
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    let email = localStorage.getItem("email");
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get(
        `${process.env.API_URL}${UserEndpoints.userInfo}?email=${email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
      setLoading(false);
      setData(res.data[0]);
      setId(res.data[0].userId);
    };

    fetchData();
    localStorage.setItem("id", data?.userId);
  }, []);
  return (
    <UserWebLayout webtitle="Admin Dashboard">
      {loading ? (
        <div className="flex-col justify-center items-center">
          <Spin /> <p>Fetching Data</p>
        </div>
      ) : (
        <div className="flex justify-between pt-6 mx-8 border-b-[1px]  border-cyan-950 text-3xl">
          <h1 className="font-bold">
            {data?.firstName} {data?.lastName}
          </h1>
          <div className="flex justify-between items-center   hover:text-green-400">
            <h2 className="cursor-pointer">Logout</h2>
          </div>
        </div>
      )}
      <UserDashboard />
    </UserWebLayout>
  );
};
export default Dashboard;
