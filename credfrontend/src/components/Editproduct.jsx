import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function Editproduct() {
  const [product, setproduct] = useState([]);
  const { pid } = useParams();
  const navigate=useNavigate()
  console.log(" edit pid:", pid);

  const [name, setname] = useState(product.name);
  const [brand, setbrand] = useState(product.brand);
  const [prize, setprize] = useState(product.prize);
  const [type, settype] = useState(product.type);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/view/${pid}`).then((response) => {
      setproduct(response.data);
    });
  }, [pid]);
  console.log("data000000", product);

  const handleUpdate = async (e) => {
   const confirm=window.confirm("save??")
   if(confirm){
    e.preventDefault();
    console.log("edit attempt");

   await axios.post(`http://localhost:8000/products/edit/${pid}`, {
      name,
      brand,
      prize,
      type,
    });
    // console.log(response)
    navigate('/')
   }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          marginTop: "100px",
          width: "300px",
          margin: "auto",
          paddingTop: "0",
          backgroundColor: "",
          padding: "50px",
          borderRadius: "30px",
          boxShadow: "1px 1px 10px 1px rgba(49, 71, 103, 0.35)",
        }}
      >
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control
              width={20}
              type="text"
              onChange={(e) => setname(e.target.value)}
              name="name"
              defaultValue={product.name}
              placeholder="product name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>brand</Form.Label> */}
            <Form.Control
              type="text"
              onChange={(e) => setbrand(e.target.value)}
              name="brand"
              defaultValue={product.brand}
              placeholder="brand name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>prize</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="prize"
              onChange={(e) => setprize(e.target.value)}
              name="prize"
              defaultValue={product.prize}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {/* <Form.Label>type</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="product category"
              onChange={(e) => settype(e.target.value)}
              name="type"
              defaultValue={product.type}
              required
            />
          </Form.Group>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "25px",
            }}
          >
            <Button type="submit">save</Button>
            <Link to={"/"}>
              <a>cancel</a>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Editproduct;
