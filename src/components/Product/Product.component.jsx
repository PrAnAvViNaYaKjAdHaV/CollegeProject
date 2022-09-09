import React from 'react'
import{ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from '@mui/icons-material'
import { Container,Img,Circle,Info,Icon} from './Product.style'
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Img src={item.img}/>
        <Info>
            <Icon>
              <SearchOutlined/>
            </Icon>
            <Icon>
              <ShoppingCartOutlined/>
            </Icon>
            <Icon>
              <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product