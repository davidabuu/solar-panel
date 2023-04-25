import React from "react";
import TableData from "../src/components/TableData";
import { Person } from "@material-ui/icons";
import UserWebLayout from "../src/components/UserWebLayout";
import Link from "next/link";
const Dashboard = () => {
  return (
    <UserWebLayout webtitle="Dashboard">
      <div className="dashboard-container">
        <div className="dash-header">
          <h1>Dashboard</h1>
          <div className="dash-name">
            <h1>Hello, ABU</h1>
            <Link href="/login">
              <Person style={{ cursor: "pointer", color: "#333" }} />
            </Link>
          </div>
        </div>
        <TableData />
      </div>
    </UserWebLayout>
  );
};
export default Dashboard;
