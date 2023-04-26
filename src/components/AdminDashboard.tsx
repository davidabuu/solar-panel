import React from "react";
import TableDataAdmin from "./TableDataAdmin";
import UserWebLayout from "./UserWebLayout";
import { useRouter } from "next/router";

const AdminDashboard = () => {
  const router = useRouter();
  const LogAdminOut = () => {
    router.push("/admin");
  };
  return (
    <UserWebLayout webtitle="Admin Dashboard">
      <div className="flex justify-between pt-6 mx-8 border-b-[1px]  border-cyan-950 text-3xl">
        <h1 className="font-bold">Welcome, Admin</h1>
        <div className="flex justify-between items-center   hover:text-green-400" onClick={LogAdminOut}>
          <h2 className="cursor-pointer">Logout</h2>
         
        </div>
      </div>
      <TableDataAdmin />
    </UserWebLayout>
  );
};

export default AdminDashboard;
