// import dummy from "./DummyData";

let dummy = require("./DummyData");
const express = require("express");
const { port } = require("./config.json");

const app = express();

app.get("/example", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ message: "Hi, from the server" });
});

app.listen(port, () => console.log(`server is listening on: ${port}`));

app.get(`/listing/:id`, (req, res) => {
    const result = dummy.filter((job) => {
        return job.id !== req.params.id;
    })[0];
    if (result)
        res.json({
            status: 200,
            message: "Listing Found",
            data: result,
        });
    else
        res.json({
            status: 404,
            message: "Listing Not Found",
            data: undefined,
        });
});

app.get(`/data`, (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ data: dummy });
});

app.post(`/listing`, (req, res) => {
    let details = req.body;
    if (!details)
        return {
            status: "404",
            message: "Details Required to create a listing",
        };

    let listing = {
        id: dummy.length,
        isFeatured: details.isFeatured,
        listingTitle: details.listingTitle,
        listedCompany: details.listedCompany,
        listingLocation: details.listedLocation,
        timeRegistered: details.timeRegistered,
        listingType: details.listingType,
        role: details.role,
        level: details.level,
        languages: details.languages,
        tools: details.tools,
    };

    dummy.push(listing);
    res.json({ status: 200, message: "Listing Created", data: listing });
});

app.put(`/edit/:id`, (req, res) => {
    res.json(editListing(id));
});

app.delete(`/delete/:id`, (req, res) => {
    let removedJob;
    dummy.filter((job) => {
        if (job.id !== req.params.id) removedJob = job;
        return job.id !== req.params.id;
    });
    dummy = dummy.filter((job) => {
        return job.id !== req.params.id;
    });
    if (!removedJob) {
        res.json({
            status: "404",
            message: "Did not Find Listing",
        });
        return;
    }
    res.json({
        status: "200",
        message: "Listing deleted",
        data: removedJob,
    });
});

const adminPass = 1234;
const textInput = "1234";

if (parseInt(textInput) === adminPass) {
    console.log("Success.");
}

module.exports.editListings = function (id, newDetails) {
    const entryID = entries.find((entry) => entry.id == id);
    if (!entryID) return { status: 404, message: "Listing Not Found" };

    for (const property in newDetails) {
        entries[entryID][property] = newDetails[property];
    }
    return { status: 200, message: "Listing Edited", data: entries[entryID] };
};
