import React from "react";
import { Container } from "./Products.style";
import { popularProducts } from "../../assets/data";
import Product from "../Product/Product.component";
const Products = () => {
  return (
    <Container>
      {popularProducts.map( item  => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
