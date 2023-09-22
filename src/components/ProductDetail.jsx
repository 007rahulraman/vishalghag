import { Box, Image, Text, Heading, Badge, Button} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

export const ProductDetail = ({
  brand,
  description,
  price,
  rating,
  stock,
  title,
  images,
}) => {

    const navigate = useNavigate()

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between'}}>
    <Carousel images={images}/>


    <Box p={4}>
          <Image src={images[0]} alt={title} w={'400px'}/>
          <Heading mt={4} mb={2} size="lg">
              {title}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
              Brand: {brand}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
              Price: ${price}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
              Rating: {rating} / 5
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
              In Stock: {stock} items
          </Text>
          <Badge colorScheme={stock > 0 ? "green" : "red"} variant="outline">
              {stock > 0 ? "In Stock" : "Out of Stock"}
          </Badge>
          <Text fontSize="lg" mt={4}>
              Description: {description}
          </Text>
      </Box>
      <Button  variant="solid" colorScheme="blue" onClick={() => navigate('/')} m={'40px'} p={'20px'}>
        Back
      </Button>
      </div>
      </>
  );
};

ProductDetail.propTypes = {
  brand: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
};
