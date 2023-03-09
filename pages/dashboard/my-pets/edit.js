import React from "react";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";

//components
import EditePet from "@/components/dashboard/Pets/EditePet";
export default function edit() {
  return (
    <DashboardLayout>
      <EditePet />
    </DashboardLayout>
  );
}
