import { fetchProducts } from '../utils/apis';
import { useQuery } from '@tanstack/react-query';
import { ProductCard } from './ProductCard';
import { SimpleGrid, Spinner } from '@chakra-ui/react';

export const ViewProducts = () => {
  const { isLoading, data } = useQuery(['product'], async () => {
    return await fetchProducts();
  });
  return (
    <SimpleGrid columns={4} spacing={1}>
      {isLoading ? (
        <Spinner size="lg" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
      }}/>
      ) : (
        data.products.map(({ title, description, price, images, id }) => (
          <ProductCard
            key={id}
            productId={id}
            productName={title}
            productDescription={description}
            productPrice={price}
            productImage={images[0]}
          />
        ))
      )}
    </SimpleGrid>
  );
};
