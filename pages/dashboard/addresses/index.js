import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//media
import MapPreserve_Pic from "../../../assets/dashboard/mapPicPreserve.svg";
import Map_Pic from "../../../assets/dashboard/mapPic.svg";
import TrashRed_Icon from "../../../assets/common/TrashIconRed.svg";
import Edit2_Icon from "../../../assets/common/EditIcon2.svg";
import More_Icon from "../../../assets/common/more.svg";
import LocationAdd_Icon from "../../../assets/dashboard/location-add.svg";
import LocationAdd_White_Icon from "../../../assets/dashboard/location-add-white.svg";
import CloseButton_Icon from "../../../assets/common/close-button.svg";
import Addresses from "../../../components/dashboard/Addresses";
export default function index() {
  return (
    <DashboardLayout>
      <Addresses />
    </DashboardLayout>
  );
}
