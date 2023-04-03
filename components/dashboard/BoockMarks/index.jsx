import { getListBookMarks } from "@/services/dashboard/bookmarks/getList";
import React, { useState, useEffect } from "react";
import BookMarkItem from "./BookMarkItem";

export default function Boockmarks() {
  const [bookMarkList, setBookMarkList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getListBookMarks();
      setBookMarkList(response.data);
      console.log(response);
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4">
      {bookMarkList.map((item) => (
        <BookMarkItem key={item.id} item={item} />
      ))}
    </div>
  );
}
