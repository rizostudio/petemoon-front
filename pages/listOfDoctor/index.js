import React from "react";
import MainLayout from "@/layout/main";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
import DoctorList from "@/components/listOfDoctor";
import { getListOfDoctor } from "@/services/Doctor/getListOfDoctor";
export async function getServerSideProps({ query }) {
  // if (query.slug === "all") {
  //   delete query.slug;
  // }

  const queryParams = new URLSearchParams(query);
  const response = await getListOfDoctor(queryParams.toString());
  console.log(response.data);
  return {
    props: {
      DoctorLists: response.data,
    },
  };
}
const Doctor = ({ DoctorLists }) => {
  return (
    <MainLayout>
      <DoctorList list={DoctorLists} />
      <BottomNavigation />
    </MainLayout>
  );
};
export default Doctor;
