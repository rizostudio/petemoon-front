import React from "react";
import { useRouter } from "next/router";
//components
import SingleProduct from "@/components/singleProduct";
import MainLayout from "@/layout/main";

const Product = () => {
  // const router = useRouter();
  // const [productsList, setProductsList] = React.useState(products);
  // React.useEffect(() => {
  //   api
  //     .get(
  //       `/api/v1/categories/${slug}/products?${new URLSearchParams(
  //         router.query
  //       ).toString()}`
  //     )
  //     .then((response) => {
  //       setProductsList(response.data.products);
  //     })
  //     .catch((error) => console.log(error));
  // }, [router.query]);
  return (
    <MainLayout>
      <SingleProduct />
    </MainLayout>
  );
};
// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const response = await api.get(`/api/v1/categories/${slug}/products`);
//   return {
//     props: {
//       products: response.data.products,
//       category: response.data.category,
//       slug,
//     },
//   };
// }
// export async function getStaticPaths() {
//   const response = await api.get(`/api/v1/categories`);
//   const categories = [
//     ...response.data.types.clothes,
//     ...response.data.types.bags,
//     ...response.data.types.shoes,
//     ...response.data.types.accessories,
//     ...response.data.types.watches,
//     ...response.data.types.sportingGoods,
//   ];
//   const paths = categories.map((category) => ({
//     params: { slug: category.slug },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }
export default Product;
