import React from "react";
import MainLayout from "@/layout/main";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
import DoctorList from "@/components/listOfDoctor";
export default function index() {
  return (
    <MainLayout>
      <DoctorList />
      <BottomNavigation />
    </MainLayout>
  );
}
