import { Container, Button } from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProcductBasket = ({ resetBasket, basket, products, total }) => {
  return (
    <Container>
      {basket.map((item) => (
        <ProductItem
          item={item}
          product={products.find((p) => p.id === item.id)}
        />
      ))}
      <h4 className="text-success">Toplam Harcanan: {total}$</h4>
      <Button variant="danger" onClick={resetBasket}>
        Sepeti Sıfırla
      </Button>
    </Container>
  );
};

export default ProcductBasket;
