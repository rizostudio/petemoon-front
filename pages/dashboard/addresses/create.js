import React from "react";

//components

import DashboardLayout from "@/layout/dashboard/DashboardLayout";

//component
import CreateAddress from "../../../components/dashboard/CreateNewAddress";
export default function create() {
  return (
    <DashboardLayout>
      <CreateAddress />
    </DashboardLayout>
  );
}
