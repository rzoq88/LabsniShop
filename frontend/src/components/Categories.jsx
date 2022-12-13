import React from 'react'
import { categories } from '../data'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'
const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ padding: "0px", flexDirection:"column" })}

`
const Categories = () => {
  return (
    <Container>
        {categories.map((item,ix)=>(
            <CategoryItem item={item} key={ix} />
        ))}

    </Container>
  )
}

export default Categories