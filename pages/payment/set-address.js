import React, { useState } from "react";
//component
import MainLayout from "@/layout/main";

import SetAddress from "@/components/payment/setAddress";
export default function index() {
  return (
    <MainLayout>
      <SetAddress />
    </MainLayout>
  );
}
