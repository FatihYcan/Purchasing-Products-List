import { Col, Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products } from "../../helper/data";
import { Header } from "../header/Header";
import { useState, useEffect } from "react";
import ProductBasket from "./ProductBasket";

const ProductsList = () => {
  const [value, setValue] = useState("");
  const [click, setClick] = useState("all");
  const [money, setMoney] = useState(5000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    const totalAmount = basket.reduce((acc, product) => {
      return (
        acc +
        product.amount * products.find((item) => item.id === product.id).price
      );
    }, 0);

    const formattedTotal = totalAmount.toFixed(2);
    setTotal(formattedTotal);
  }, [basket, products]);

  return (
    <>
      <Header setClick={setClick} money={money} total={total} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="input"
  
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <Container className="mt-3 ">
        <Row>
          <Col className="bg-light border border-light h-100 mb-3 col-money" md={3}>
            <Container className="text-center mt-3">
              {total > 0 && money - total !== 0 && (
                <div>
                  <h2 className="text-danger">
                    Harcayacak {(money - total).toFixed(2)} $ paranız kaldı
                  </h2>
                  <h5 className="mt-3 text-primary">Alışveriş Listeniz</h5>
                </div>
              )}
              {total > 0 && money - total === 0 && (
                <div>
                  <h2 className="text-white bg-danger">
                    Paran bitti, artık alışveriş yapamazsın !!!
                  </h2>
                  <h5 className="mt-3 text-primary">Alışveriş Listeniz</h5>
                </div>
              )}
              {total <= 0 && (
                <div>
                  <h2 className="text-success">
                    Harcamak için {money} $ paranız var
                  </h2>
                </div>
              )}
            </Container>

            <Container className="text-center p-3 ">
              {total > 0 && (
                <ProductBasket
                  products={products}
                  basket={basket}
                  total={total}
                  resetBasket={resetBasket}
                />
              )}
            </Container>
          </Col>

          <Col md={{ span: 8, offset: 1 }}>
            {
              <Container className="product-list rounded-4 my-1 mb-1 ">
                <Row className="g-3 justify-content-center">
                  {products
                    .filter(
                      (item) =>
                        item.title
                          .toLowerCase()
                          .includes(value.toLowerCase().trim()) &&
                        (click.toLowerCase() === "all"
                          ? item
                          : item.category.toLowerCase() === click.toLowerCase())
                    )
                    .map((item) => (
                      <Col key={item.id}>
                        <ProductCard
                          key={item.id}
                          item={item}
                          basket={basket}
                          setBasket={setBasket}
                          money={money}
                          total={total}
                        />
                      </Col>
                    ))}
                </Row>
              </Container>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
