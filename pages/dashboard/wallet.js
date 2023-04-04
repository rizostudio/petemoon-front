import React from "react";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//components
import Wallet from "@/components/dashboard/wallet";
export default function wallet() {
  return (
    <DashboardLayout>
      <Wallet />
    </DashboardLayout>
  );
}
