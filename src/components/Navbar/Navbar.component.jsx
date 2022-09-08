import React from "react";
import {Badge} from '@mui/material'
import { Search,ShoppingCartOutlined } from "@mui/icons-material";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenueItem
} from "./Navbar.style";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search />
          </SearchContainer>
        </Left>
        <Center><Logo>Liebe</Logo></Center>
        <Right>
         <MenueItem>REGISTER</MenueItem>
         <MenueItem>SIGN IN</MenueItem>
          <MenueItem>
              <Badge badgeContent = {4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
          </MenueItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
