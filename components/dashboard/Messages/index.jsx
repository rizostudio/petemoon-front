import { getListMessage } from "@/services/dashboard/message/getList";
import React, { useEffect, useState } from "react";
import MessageItem from "./MessageItem";

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
    <div className="flex flex-col items-stretch">
      {messageList.map((item) => (
        <MessageItem key={item.id} item={item} />
      ))}
    </div>
  );
}
