import UserDashboard from "@/components/UserDashboard";
import UserWebLayout from "@/components/UserWebLayout";
import { UserEndpoints } from "@/helper";
import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Dashboard = () => {
  interface DataInfo {
    firstName: string;
    lastName: string;
    id: number;
  }
  const [data, setData] = useState<DataInfo>();
  const [loading, setLoading] = useState<boolean>(false);
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
      setLoading(false);
      setData(res.data[0]);
    };

    fetchData();
  }, []);
  return (
    <UserWebLayout webtitle="User Dashboard">
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
      <UserDashboard id={data?.id} />
    </UserWebLayout>
  );
};
export default Dashboard;
