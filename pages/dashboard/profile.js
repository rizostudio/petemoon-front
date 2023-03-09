import React from "react";

//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//component
import UserInfo from "@/components/dashboard/userInfo";

export default function profile() {
  return (
    <DashboardLayout>
      <UserInfo />
    </DashboardLayout>
  );
}
