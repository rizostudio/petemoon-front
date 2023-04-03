import React from "react";
import { useRouter } from "next/router";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";

//components
import EditePet from "@/components/dashboard/Pets/EditePet";
export default function edit() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <DashboardLayout>
      <EditePet id={id} />
    </DashboardLayout>
  );
}
