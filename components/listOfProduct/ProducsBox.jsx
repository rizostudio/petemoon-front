import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
//component
import ListOfProductCard from "../partials/productCard/ListOfProductCard";
//services
import { getListProducts } from "@/services/product/getListOfProducts";
//loading
import Loading from "../partials/loading";
function ProducsBox({ data }) {
  const [lastEllement, setLastEllement] = useState(null);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [products, setProducts] = useState(data);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const query = router.query;
    const getData = async () => {
      const queryParams = new URLSearchParams(query);
      queryParams.set("limit", limit);
      queryParams.set("offset", page);
      const response = await getListProducts(queryParams.toString());
      if (response.success) {
        setProducts((prev) => [...prev, ...response.data.products]);
        setloading(false);
      }
    };
    getData();
  }, [page]);
  useEffect(() => {
    const observerRef = new IntersectionObserver(
      ([enttry]) => {
        if (enttry.isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.6 }
    );
    if (lastEllement) {
      observerRef.observe(lastEllement);
    }
    return () => {
      if (lastEllement) {
        observerRef.unobserve(lastEllement);
      }
    };
  }, [lastEllement]);
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-5">
      {products &&
        products.map((item, index) => (
          <div key={item.slug} ref={setLastEllement}>
            <ListOfProductCard item={item} index={index} />
          </div>
        ))}
      {loading && <Loading />}
    </div>
  );
}
export default ProducsBox;
