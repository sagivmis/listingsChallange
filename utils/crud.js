const { forEach } = require("../DummyData");
let entries = require("../DummyData");

console.log(entries[1]);

module.exports.createListing = function (details) {
    if (!details)
        return {
            status: "404",
            message: "Details Requierd to create a listing",
        };
    const lastIndex = entries[entries.length - 1];
    const newEntrie = {
        id: lastIndex + 1,
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

    entries.push(newEntrie);

    return { status: 200, message: "Listing Created" };
};

module.exports.getListing = function (searchParams) {
    /*
    for (const item in entries){
        const itemStr = item.toString();
        const listingsToRet = [];
        const args = searchParams.split(" ");
        for (const arg of args) {
            if (item.includes(arg)) {
                if ()
            }
        }
    } 
    */
    return { status: 200, message: "Listing Found", data: entries };
};

module.exports.editListings = function (id, newDetails) {
    const entryID = entries.find((entry) => entry.id == id);
    if (!entryID) return { status: 404, message: "Listing Not Found" };

    for (const property in newDetails) {
        entries[entryID][property] = newDetails[property];
    }
    return { status: 200, message: "Listing Edited", data: entries[entryID] };
};

module.exports.deleteListing = function (id) {
    const delIndex = entries.find((entry) => entry.id == id);
    if (!delIndex) {
        return { status: 404, message: "Listing Not Found" };
    }
    entries.splice(delIndex, 1);

    return { status: 200, message: "Listing Deleted" };
};
/*
----------------
utils/crud.js::
----------------
API calls:
  CreateListing
  GetListing
  EditListing
  DeleteListings
*/
