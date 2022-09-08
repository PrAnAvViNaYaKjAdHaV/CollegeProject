import React from 'react'
import { categories } from '../../assets/data'
import { Container } from './Category.styled'
import  {CategoryItems} from '../CategoryItem/CategoryItem.component'
const Category = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItems item={item}/>
        ))}
    </Container>
  )
}

export default Category