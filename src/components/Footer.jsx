import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Room,
  Phone,
  Mail,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  //width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>FUR.NI.TURE</Logo>
        <Desc>
          Our vision is to create a better everyday life for the many people. We
          believe we can make a big difference for people with big dreams and
          thin wallets, and we want to do it within the limits of our planet.{" "}
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Sofas & Chairs</ListItem>
          <ListItem>Coffee Tables</ListItem>
          <ListItem>Lamps & Candeliers</ListItem>
          <ListItem>Bedroom Furniture</ListItem>
          <ListItem>OrderTracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", fontSize: 20, color: "red" }} />
          Gdansk, Poland
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px", fontSize: 20, color: "red" }} />
          +48 88 3906 55
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px", fontSize: 20, color: "red" }} />
          contact@furni.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
