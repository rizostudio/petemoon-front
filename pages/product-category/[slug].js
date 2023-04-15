import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Fragment } from "react";
//service
import { getListProducts } from "@/services/product/getListOfProducts";
//component
import ProductList from "@/components/listOfProduct";
import MainLayout from "@/layout/main";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
import ToatContainer from "@/components/partials/toast/ToatContainer";
export async function getServerSideProps({ query }) {
  const queryParams = new URLSearchParams(query);
  queryParams.set("limit", 10);
  queryParams.set("offset", 1);
  const response = await getListProducts(queryParams.toString());
  console.log(response.data.products);
  return {
    props: {
      productsList: response.data.products,
    },
  };
}
const Products = ({ productsList }) => {
  return (
    <>
      <ToatContainer />
      <MainLayout>
        <ProductList products={productsList} />
        <BottomNavigation />
      </MainLayout>
    </>
  );
};

export default Products;
