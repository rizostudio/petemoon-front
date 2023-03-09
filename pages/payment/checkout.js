import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//components
import MainLayout from "@/layout/main";
//media
import ArrowLeftWhite_Icon from "../../assets/common/leftArrowWhite.svg";
import edit_Icon from "../../assets/common/EditIcon2.svg";
import OrderSummery from "@/components/payment/checkout";
export default function Index() {
  const router = useRouter();
  const data = [1, 2, 3, 4, 5];
  const discountData = [
    { code: "1234567", value: 70000 },
    { code: "4567", value: 80000 },
    { code: "123", value: 20000 },
  ];
  const [offCode, setOffCode] = useState("");
  const [codeStatus, setCodeStatus] = useState({
    status: "notYet",
    value: null,
  });
  const submitHandler = (event) => {
    event.preventDefault();
    const codeSelected = discountData.filter((item) => item.code == offCode);
    codeSelected
      ? setCodeStatus({ status: "yes", value: codeSelected[0].value })
      : setCodeStatus({ status: "no", value: null });
  };
  const exitHandler = () => {
    //
  };
  return (
    <MainLayout>
      <OrderSummery />
    </MainLayout>
  );
}
