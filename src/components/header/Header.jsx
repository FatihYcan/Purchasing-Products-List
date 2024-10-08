import React from "react";
import { Button, Stack } from "react-bootstrap";
import "./Header.scss";
import { categories } from "../../helper/data";
export const Header = ({ setClick }) => {
  return (
    <div className="header">
      <h1>Products List</h1>

      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={(e) => setClick(e.target.textContent)}
          >
            {category.toUpperCase()}
          </Button>
        ))}
      </Stack>
    </div>
  );
};
