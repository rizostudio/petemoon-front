import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//service
import { getListProducts } from "@/services/product/getListOfProducts";
import * as queryString from "@/services/queryString";
//component
import ProductList from "@/components/listOfProduct";
import MainLayout from "@/layout/main";
import BottomNavigation from "@/components/partials/BottomNavigation/BottomNavigation";
import Loading from "@/components/partials/loading";
import ToatContainer from "@/components/partials/toast/ToatContainer";
const Products = ({ query, productsList }) => {
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
export async function getServerSideProps({ query }) {
  const queryParams = new URLSearchParams(query);
  queryParams.set("limit", 1);
  queryParams.set("offset", 1);
  const response = await getListProducts(queryParams.toString());
  console.log(response.data.products);
  return {
    props: {
      productsList: response.data.products,
      query,
    },
  };
}
