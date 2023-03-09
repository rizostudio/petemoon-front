import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//service
import { getListProducts } from "@/services/product/getListOfProducts";
//component
import ProductList from "@/components/listOfProduct";
import MainLayout from "@/layout/main";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
import Loading from "@/components/partials/loading";
import ToatContainer from "@/components/partials/toast/ToatContainer";

const Products = (query, products) => {
  return (
    <>
      <ToatContainer />
      <MainLayout>
        <ProductList />
        <BottomNavigation />
      </MainLayout>
    </>
  );
};

export default Products;
export async function getServerSideProps({ query }) {
  console.log(query);
  const response = await getListProducts(new URLSearchParams(query).toString());

  console.log(response);
  return {
    props: {
      products: response.data.products,
      // category: response.data.category,
      query,
    },
  };
}
