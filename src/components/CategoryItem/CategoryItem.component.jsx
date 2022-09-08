import React from "react";
import { Container,Image,Info,Title,Button } from "./CategoryItem.style";
export const CategoryItems = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  );
};

