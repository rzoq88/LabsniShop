import styled from "styled-components"

const Container = styled.div`
height :30px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:400;


`
const Announcement = () => {
  return (
   <Container>
    Super deal!! Free Shipping on Orders Over 2,000,000
   </Container>
  )
}

export default Announcement