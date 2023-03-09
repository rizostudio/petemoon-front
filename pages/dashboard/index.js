import React, { useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
//component
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import DashboardOverView from "@/components/dashboard/overView";

export default function index() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <DashboardOverView />
    </DashboardLayout>
  );
}
