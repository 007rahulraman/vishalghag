import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Heading,
  Button,
  Box,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export const ProductCard = ({
  productName,
  productPrice,
  productImage,
  productDescription,
  productId,
}) => {
  return (
    <Box w="100%" p={4}>
      <Card variant="outline">
        <CardHeader>
          <Image src={productImage} alt={productName} w="50%" h="100%" />
        </CardHeader>
        <CardBody>
          <Heading size="lg">{productName}</Heading>
          <Heading size="sm">{`$ ${productPrice}`}</Heading>
          <Text>{productDescription}</Text>
        </CardBody>
        <CardFooter>
          <Link
            to={{
              pathname: `product/${productId}`,
            }}
          >
            <Button
              colorScheme="teal"
              variant="link"
            >
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Box>
  );
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
};
