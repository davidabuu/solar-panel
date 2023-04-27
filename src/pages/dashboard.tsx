import React from "react";
import Link from "next/link";
import UserWebLayout from "@/components/UserWebLayout";
const Dashboard = () => {
  return (
    <UserWebLayout webtitle="Dashboard">
      <div className="dashboard-container">
        <div className="dash-header">
          <h1>Dashboard</h1>
          <div className="dash-name">
            <h1>Hello, ABU</h1>
            <Link href="/login">
             
            </Link>
          </div>
        </div>
      
      </div>
    </UserWebLayout>
  );
};
export default Dashboard;
