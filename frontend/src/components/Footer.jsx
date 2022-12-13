import { Facebook, Instagram, MailOutline, Phone, Room, Telegram, WhatsApp } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`

 display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color: white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`;
const Center = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({ display: "none" })}
`;
const Title=styled.h3`
margin-bottom:30px;
`

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;


`
const  ListItem = styled.li`
width:50%;
margin-bottom:10px;
`
const Right = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;
const ContantItem =styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lansni</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, sequi
          voluptate inventore ut quibusdam possimus dolorum soluta nihil quas
          facere quidem dolorem nulla ab, itaque temporibus aut eius ad
          officiis!
        </Desc>
        <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Telegram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
            Contact Us.
        </Title>
        <ContantItem><Room style={{marginRight:'10px'}} /> Damascus ,Alsalhieah Front of Ecommy minsitry.</ContantItem>
        <ContantItem><Phone style={{marginRight:'10px'}}/> +963988474872</ContantItem>
        <ContantItem><MailOutline style={{marginRight:'10px'}}/>contact@labsni.net</ContantItem>
      </Right>
    </Container>
  );
};

export default Footer;
