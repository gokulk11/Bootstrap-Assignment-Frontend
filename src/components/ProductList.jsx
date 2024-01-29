import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StarRating from "./StarRating";

const ProductList = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json(); // Add await here
        setItems(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const item = items.map((product,i) =>{
        return(
            <Col key={i}  className="mb-2">
            <div className="card">
              <img
                src={product.images[0]}
                className="card-img-top" style={{width:"100%", height:"200px",padding:"5px"}}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <StarRating rating={product.rating} />
                <div className=" d-flex gap-2">
                  <a href="#" className="btn btn-primary">
                    Add to cart
                  </a>
                  <a href="#" className="btn btn-primary">
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </Col>
        )
  })

  return (
    <div>
      <h3>Featured Products</h3>
      <Container fluid>
        <Row xs={1} sm={2} md={2} lg={3}>
          {item}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
