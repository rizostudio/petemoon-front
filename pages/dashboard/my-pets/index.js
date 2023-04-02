import React, { useState, useEffect } from "react";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//components
import Pets from "@/components/dashboard/Pets/ListPet";
export default function index() {
  return (
    <DashboardLayout>
      <Pets />
    </DashboardLayout>
  );
}
