import { getListMessage } from "@/services/dashboard/message/getList";
import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import Link from "next/link";
import Image from "next/image";
export default function Messages() {
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getListMessage();
      setMessageList(response.data);
    };
    getData();
  }, []);
  return (
    <>
      {messageList.length ? (
        <div className="flex flex-col items-stretch">
          {messageList.map((item) => (
            <MessageItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <>
          <p className="text-lg  lg:text-3xl text-primary">
            تا کنون پیامی از جانب پتمون دریافت نکرده اید
          </p>
        </>
      )}
    </>
  );
}
