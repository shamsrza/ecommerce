import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 10px;
  height: 50vh;
  min-width: 500px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.6;
  border-radius: 7px;
  &:hover {
    background-color: transparent;
  }
`;
const Title = styled.h1`
  color: #cc0000;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  background-color: white;
  color: #404040;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background-color: #cc0000;
    color: white;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    </>
  );
};

export default CategoryItem;
