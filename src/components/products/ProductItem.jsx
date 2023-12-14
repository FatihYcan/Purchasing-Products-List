import { Container } from "react-bootstrap";

const ProductItem = ({ item, product }) => {
  return (
    <Container className="text-center ">
      <div className="mb-2 d-flex justify-content-center align-items-center ">
        <img
          className="mx-2 "
          src={product.image}
          width={"65px"}
          height={"80px"}
          alt={product.image}
        />
        x {item.amount}
      </div>
    </Container>
  );
};

export default ProductItem;
