import React from "react";
import { useRouter } from "next/router";
//components
import SingleProduct from "@/components/singleProduct";
import MainLayout from "@/layout/main";
//services
import { getListProducts } from "@/services/product/getListOfProducts";
import { getSingleProduct } from "@/services/product/getSingleProduct";
//toast Container
import ToatContainer from "@/components/partials/toast/ToatContainer";
const Product = ({ product }) => {
  return (
    <>
      <ToatContainer />
      <MainLayout>
        <SingleProduct data={product} />
      </MainLayout>
    </>
  );
};
export async function getStaticProps(context) {
  const { slug } = context.params;
  const response = await getSingleProduct(slug);
  console.log(response.data.pet_type);
  console.log(response.data);
  return {
    props: {
      product: response.data,
      slug,
    },
  };
}
export async function getStaticPaths() {
  const response = await getListProducts();
  const routes = response.data.products;
  console.log(routes);
  const paths = routes.map((product) => ({
    params: { slug: product.slug },
  }));
  return {
    paths,
    fallback: true,
  };
}
export default Product;
