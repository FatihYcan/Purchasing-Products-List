import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ item, basket, setBasket, money, total }) => {
  const { id, title, image, price } = item;
  const [show, setShow] = useState(false);

  const basketProduct = basket.find((product) => product.id === item.id);

  const addBasket = () => {
    const checkBasket = basket.find((product) => product.id === item.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((product) => product.id !== item.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: item.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((product) => product.id === item.id);
    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((product) => product.id !== item.id)]);
    } else {
      setBasket([
        ...basket.filter((product) => product.id !== item.id),
        checkBasket,
      ]);
    }
  };

  return (
    <Card className="rounded-2 m-auto card" role="button" key={id}>
      <Card.Header className="d-flex justify-content-between">
        <Card.Title>{price} $ </Card.Title>
        <MdFavorite
          size={30}
          className={show ? "text-danger" : "text-dark"}
          onClick={() => setShow(!show)}
        />
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title>{title}</Card.Title>
      </Card.Footer>
      <Card.Header className="d-flex button">
        <Button
          className="sell"
          variant="warning"
          disabled={!basketProduct}
          onClick={removeBasket}
        >
          Sat
        </Button>
        <span className="amount">
          {(basketProduct && basketProduct.amount) || 0}
        </span>
        <Button
          key={item.id}
          className="buy"
          variant="success"
          onClick={addBasket}
          disabled={price > money - total}
        >
          Satın Al
        </Button>
      </Card.Header>
    </Card>
  );
};

export default ProductCard;
