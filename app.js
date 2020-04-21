const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');

// RESOURCES
const INSURANCES = require("./resources/insurances.json");
const LOANS = require("./resources/loans.json");
const BILLS_PAYMENTS = require("./resources/billspayments.json");


const app = express();
const port = process.env.PORT || 9000;
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));


app.get("/insurances", (req, res) => {
    res.status(200).send(INSURANCES);
});
app.get("/loans", (req, res) => {
    res.status(200).send(LOANS);
});
app.get("/billspayments", (req, res) => {
    res.status(200).send(BILLS_PAYMENTS);
});
app.listen(port, () => {
    console.log(`running at port ${port}`);
});