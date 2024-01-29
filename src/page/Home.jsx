import React, { useEffect } from "react";
import Swiper from "../components/Swiper";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";

const Home = () => {


  return (
    <Container>
      <Swiper />
      <ProductList />
    </Container>
  );
};

export default Home;
