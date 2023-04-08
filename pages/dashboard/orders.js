import React from "react";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//component
import Orders from "@/components/dashboard/Orders";
export default function orders() {
  return (
    <DashboardLayout>
      <Orders />
    </DashboardLayout>
  );
}
