const express = require("express");
const bodyparser = require("body-parser");

// RESOURCES
const PRODUCTS = require("./resources/products.json");
const USERS = require("./resources/users.json");
const CUSTOMERS = require("./resources/customers.json");


const app = express();
const port = process.env.PORT || 9000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.get("/products", (req, res) => {
    res.status(200).send(PRODUCTS);
});
app.get("/users", (req, res) => {
    res.status(200).send(USERS);
});
app.get("/customers", (req, res) => {
    res.status(200).send(CUSTOMERS);
});
app.listen(port, () => {
    console.log(`running at port ${port}`);
});