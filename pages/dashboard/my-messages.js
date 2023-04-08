import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//component
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//media
import Trash_Icon from "../../assets/common/trash.svg";
import Messages from "@/components/dashboard/Messages";
export default function message() {
  return (
    <DashboardLayout>
      <Messages />
    </DashboardLayout>
  );
}
