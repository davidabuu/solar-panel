import React from "react";
import UserWebLayout from "./UserWebLayout";
import { ExitToApp } from "@material-ui/icons";
import TableDataAdmin from "./TableDataAdmin";

const AdminDashboard = () => {
  return (
    <UserWebLayout webtitle="Admin Dashboard">
      <div className="flex justify-between pt-6 mx-8 border-b-[1px]  border-cyan-950 text-3xl">
        <h1 className="font-bold">Welcome, Admin</h1>
        <ExitToApp className="cursor-pointer" />
      </div>
      <TableDataAdmin />
    </UserWebLayout>
  );
};

export default AdminDashboard;
