import React from "react";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//component
import CreatePet from "@/components/dashboard/Pets/CreatePet";
export default function createNewPet() {
  return (
    <DashboardLayout>
      <CreatePet />
    </DashboardLayout>
  );
}
