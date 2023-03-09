import React from "react";
//layout
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
//component
import Boockmarks from "@/components/dashboard/BoockMarks";

export default function bookmarks() {
  // fake data
  // const [bookmarkArr, setBookmarkArr] = useState([
  //   { key: 1, name: "غذای خشک سگ", picture: "", price: 120000, discount: 0 },
  //   { key: 2, name: "توپ سبک گربه", picture: "", price: 125000, discount: 15 },
  //   { key: 3, name: "اسباب بازی سگ", picture: "", price: 76000, discount: 0 },
  //   { key: 4, name: "غذای خشک سگ", picture: "", price: 120000, discount: 0 },
  //   { key: 5, name: "توپ سبک گربه", picture: "", price: 125000, discount: 15 },
  //   { key: 6, name: "اسباب بازی سگ", picture: "", price: 76000, discount: 0 },
  // ]);
  // for remove data from list
  // const TrashHandler = (index) => {
  //   const newArr = [...bookmarkArr];
  //   newArr.splice(1, index);
  //   setBookmarkArr(newArr);
  //   console.log(bookmarkArr);
  // };
  return (
    <DashboardLayout>
      <Boockmarks />
    </DashboardLayout>
  );
}
