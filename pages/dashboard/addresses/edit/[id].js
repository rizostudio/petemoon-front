import React from "react";
import { useRouter } from "next/router";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//component
import EditAddress from "@/components/dashboard/EditAddresses";
//http
// import { httpRequest } from "@/services/http";

export default function edit() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <DashboardLayout>
      <EditAddress id={id} />
    </DashboardLayout>
  );
}
