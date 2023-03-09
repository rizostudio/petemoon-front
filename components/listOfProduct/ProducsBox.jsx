import React from "react";
//component
import ListOfProductCard from "../partials/productCard/ListOfProductCard";
function ProducsBox({ data }) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-5">
      {data.similarProduct &&
        data.similarProduct.map((item, index) => (
          <ListOfProductCard key={item.id} item={item} index={index} />
        ))}
    </div>
  );
}
export default React.memo(ProducsBox);
