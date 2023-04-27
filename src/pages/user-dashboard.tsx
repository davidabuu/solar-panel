

import UserWebLayout from "@/components/UserWebLayout";
import { User } from "heroicons-react";
import Link from "next/link";
import React from "react";
const Dashboard = () => {
  return (
    <UserWebLayout webtitle="Dashboard">
      <div className="dashboard-container">
        <div className="dash-header">
          <h1>Dashboard</h1>
          <div className="dash-name">
            <h1>Hello, ABU</h1>
            <Link href="/login">
              <User style={{ cursor: "pointer", color: "#333" }} />
            </Link>
          </div>
        </div>
      </div>
    </UserWebLayout>
  );
};
export default Dashboard;
