const express = require("express");
const app = express();
const cors=require('cors')

const credRouter = require("./router/CredRouter");
const connection = require("./config/connection");

connection();

app.use(express.json());
app.use(cors())
app.use("/", credRouter);




const port = 8000;
app.listen(port, console.log(`server running on ${port}`));
