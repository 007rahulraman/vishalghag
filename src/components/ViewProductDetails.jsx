import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsDetails } from "../utils/apis";
import { Box } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { ProductDetail } from "./ProductDetail";
// import ProductDetail from './ProductDetail';

export const ViewProductDetails = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(["productDetail", id], async () => {
    return await fetchProductsDetails(id);
  });


  if (!data) {
    return <div>No data available.</div>;
  }

  const { brand, description, price, rating, stock, title, images } = data;

  return (
    <Box>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <>
          <ProductDetail
            brand={brand}
            description={description}
            price={price}
            rating={rating}
            stock={stock}
            title={title}
            images={images}
          />
        </>
      )}
    </Box>
  );
};
