import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div`
`
const Wrapper=styled.div`
padding:50px;
display:flex;
${mobile({ padding: "10px", flexDirection:"column" })}

`
const ImgContainer=styled.div`
flex:1;
`
const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({ height: "40vh" })}
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({ padding: "10px" })}
`
const Title=styled.h1`
font-weight:200;
`
const Desc=styled.p`
margin:20px 0px;
`
const Price = styled.span`
font-weight:100;
font-size:40px;

`
const FilterContainer =styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({ width: "100%" })}
`
const Filter=styled.div`
display:flex;
align-items:center;
`
const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`
const FliterSizeOption = styled.option``
const AddContainer =styled.div`
display:flex;
align-items:center;
width:50%;
justify-content:space-between;
${mobile({ width: "100%" })}
`
const AmmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;`
const Ammount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;



`
const Button = styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
&:hover{
    background-color:#f8f4f4;
}
`

const Product = () => {
  return (
   < Container>
   <Navbar />
   <Announcement />
   <Wrapper>
    <ImgContainer>
    <Image src='https://i.ibb.co/S6qMxwr/hean.jpg' />
    </ImgContainer>
    <InfoContainer>
        <Title>
            Geust Suits
        </Title>
        <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, aut atque hic assumenda distinctio, alias eos sit nam debitis repudiandae minus maiores laudantium iste illo officiis necessitatibus reprehenderit. Dolorum, obcaecati!</Desc>
        <Price>20$</Price>
        <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color='Black' />
                <FilterColor color='green' />
                <FilterColor color='gray' />
                <FilterColor color='darkblue' />
            </Filter>
            <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
            <FliterSizeOption>XS</FliterSizeOption>
            <FliterSizeOption>S</FliterSizeOption>
            <FliterSizeOption>M</FliterSizeOption>
            <FliterSizeOption>L</FliterSizeOption>
            <FliterSizeOption>XL</FliterSizeOption>
            <FliterSizeOption>XXL</FliterSizeOption>
            </FilterSize>
            </Filter>
        </FilterContainer>
        <AddContainer>
            <AmmountContainer>
                <Remove/>
                <Ammount>1</Ammount>
                <Add />
            </AmmountContainer>
            <Button>
                Add to Cart
            </Button>
        </AddContainer>
    </InfoContainer>
   </Wrapper>
   <Newsletter />
   <Footer />
   </Container>
  )
}

export default Product