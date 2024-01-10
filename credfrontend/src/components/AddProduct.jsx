import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function AddProduct() {
  const [name, setname] = useState("");
  const [brand, setbrand] = useState("");
  const [prize, setprize] = useState("");
  const [type, settype] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newproduct = await axios.post("http://localhost:8000/products/add", {
      name,
      brand,
      prize,
      type,
    });
    alert("added");
    setname("")
    setbrand("")
    setprize("")
    settype("")
    console.log(newproduct)
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh"}}>
         <div style={{marginTop:"100px",width:"300px",margin:"auto",paddingTop:"0",backgroundColor:"",padding:"50px",borderRadius:"30px" ,boxShadow:"1px 1px 10px 1px rgba(49, 71, 103, 0.35)"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
          width={20}
            type="text"
            onChange={(e) => setname(e.target.value)}
            name="name"
            value={name}
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
            value={brand}
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
            value={prize}
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
            value={type}
            required
          />
        </Form.Group>

       <div style={{display:"flex",flexDirection:"column",gap:"10px" ,marginTop:"25px"}}>
       <Button type="submit">Add</Button>
        <Link to={'/'} ><a type="submit">back</a></Link>
       </div>
        
      </Form>
    </div>
    </div>
   
  );
}

export default AddProduct;
