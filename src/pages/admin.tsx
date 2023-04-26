import AdminLogin from "@/components/AdminLogin";
import UserWebLayout from "@/components/UserWebLayout";
import React from "react";

const Admin = () => {
  return (
    <UserWebLayout webtitle='Admin Login'>
      <AdminLogin />
    </UserWebLayout>
  );
};

export default Admin;
