import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Allproducts() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products/all").then((response) => {
      setproducts(response.data);
    });
  }, []);

  console.log(products);

  const buttonHolder = {
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  };

  const heading = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    justifyContent: "center",
    backgroundColor: "wheat",
    marginBottom: "20px",
  };

  return (
    <div style={{ margin: "0px 20px" }}>
      <div style={heading}>
        <h2>Products</h2>
      </div>
      <div>

        <Link to={'/add'}><Button
          variant="success"
          style={{ padding: "10px", width: "150px", margin: "30px" }}
        >
          Add Product +
        </Button></Link>
        
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((e) => (
          
          <Card
          key={products._id}
        
            style={{
              width: "16rem",
              boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.17)",
              margin: "10px",
              borderRadius: "15px",
            }}
          >
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              {/* <Card.Text>{e.brand}</Card.Text> */}
              <Card.Text>Rs.{e.prize}</Card.Text>
              {/* <Card.Text>{e.type}</Card.Text> */}
              {/* <p>{e._id}</p> */}
              <div style={buttonHolder}>
                <Link to={`/view/${e._id}`}><Button variant="primary">View product</Button></Link>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Allproducts;
