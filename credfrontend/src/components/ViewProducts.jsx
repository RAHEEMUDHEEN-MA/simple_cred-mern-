import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function ViewProducts() {
    const navigate=useNavigate()
  const [product, setproduct] = useState([]);
  const { pid } = useParams();
  console.log("iiiddd", pid);
  const theid=product._id
  console.log("the id",theid)

  useEffect(() => {
    axios.get(`http://localhost:8000/products/view/${pid}`).then((response) => {
      setproduct(response.data);
    });
  }, [pid]);

  const handleDelete = async (theid) => {
   const confirmdlt=window.confirm("delete??")
   if(confirmdlt){
    try {
        console.log("attemp of delete", theid);
        await axios.delete(`http://localhost:8000/products/delete/${pid}`);
        navigate("/")
      } catch (Err) {
        console.log("error in deletion", Err);
      }
   }
  };

  console.log("response", product);

  const buttonHolder = {
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Card
        style={{
          width: "16rem",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.17)",
          margin: "10px",
          borderRadius: "15px",
        }}
      >
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.brand}</Card.Text>
          <Card.Text>{product.prize}</Card.Text>
          <Card.Text>{product.type}</Card.Text>
          <Card.Text>{product._id}</Card.Text>
          <div style={buttonHolder}>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" onClick={handleDelete}>
              delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewProducts;
