import styled from "styled-components"
import Product from "./Product"
import {popularProducts} from '../data'

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item,ix)=>(
            <Product item={item} key={ix} />
        ))}

    </Container>
  )
}

export default Products