import React from "react";
import DoctorCard from "@/components/partials/DoctorCard.jsx";

export default function DoctorBox({ data }) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-between items-center mt-5">
      {data && data.map((item, index) => <DoctorCard item={item} />)}
    </div>
  );
}
