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
  MenuItem
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
         <MenuItem>REGISTER</MenuItem>
         <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
              <Badge badgeContent = {4} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
