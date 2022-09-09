import React from 'react'
import Navbar from '../../components/Navbar/Navbar.component'
import Announcement from '../../components/Announcement/Annoucement.compoent'
import Products from '../../components/Products/Products.component'
import Newsletter from '../../components/NewsLetter/NewseLetter.component'
import Footer from '../../components/Footer/Footer.componenet'
import { Container,Title,Filter,FilterContainer,FilterText,Select,Option } from './ProductList.style'
const ProductList = () => {
  return (
    <Container>
    <Navbar />
    <Announcement />
    <Title>Dresses</Title>
    <FilterContainer>
      <Filter>
        <FilterText>Filter Products:</FilterText>
        <Select>
          <Option disabled selected>
            Color
          </Option>
          <Option>White</Option>
          <Option>Black</Option>
          <Option>Red</Option>
          <Option>Blue</Option>
          <Option>Yellow</Option>
          <Option>Green</Option>
        </Select>
        <Select>
          <Option disabled selected>
            Size
          </Option>
          <Option>XS</Option>
          <Option>S</Option>
          <Option>M</Option>
          <Option>L</Option>
          <Option>XL</Option>
        </Select>
      </Filter>
      <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
          <Option selected>Newest</Option>
          <Option>Price (asc)</Option>
          <Option>Price (desc)</Option>
        </Select>
      </Filter>
    </FilterContainer>
    <Products />
    <Newsletter />
    <Footer />
  </Container>
  )
}

export default ProductList