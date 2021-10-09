// import dummy from "./DummyData";

const dummy = require("./DummyData");
console.log(dummy);
const express = require("express");
const { port } = require("./config.json");
const {
    getListing,
    createListing,
    editListing,
    deleteListing,
} = require("./utils/crud");

const app = express();

app.get("/example", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ message: "Hi, from the server" });
});

app.listen(port, () => console.log(`server is listening on: ${port}`));

app.get(`/listing/:listingName`, (req, res) => {
    res.json(getListing(listingName));
});

app.get(`/data`, (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ data: dummy });
});

app.post(`/listing`, (req, res) => {
    let listing = {
        isFeatured: false,
        listingTitle: "Dummy Frontend Developer",
        listedCompany: "Dummy Photosnap",
        listingLocation: "Dummy USA only",
        timeRegistered: "Dummy 02/10/2021",
        listingType: LISTING_TYPES.FULL_TIME,
        role: ROLES.FRONTEND,
        level: LEVELS.SENIOR,
        languages: [LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.JS],
        tools: [],
    };
    res.json(createListing(listing));
});

app.put(`/edit/:id`, (req, res) => {
    res.json(editListing(id));
});

app.delete(`/delete/:id`, (req, res) => {
    res.json(deleteListing(id));
});

const adminPass = 1234;
const textInput = "1234";
if (parseInt(textInput) === adminPass) {
    console.log("Success.");
}

/*
----------------
utils/crud.js::
----------------

API calls:

  createListing
  getListing
  editListing
  deleteListing



*/
