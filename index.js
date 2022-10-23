const express = require("express");
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 5656;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/find", async (req, res) => {
    const memberData = await findMemberData('id');
    console.log(memberData)
    res.json(memberData);
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});

async function findMemberData(id) {
    const url = `https://data.mongodb-api.com/app/data-ybwtl/endpoint/data/v1/action/findOne`
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": "lW050ldNtvMHO0xqzumxyTscgoHviynOVDbsrdd0CC4xaSvJUsiY8a2CWRkehKRV",
    }
    const body = {
        "collection":"member",
        "database":"church",
        "dataSource":"Cluster0",
        "filter": { "name" : id}
    }

    const memberData = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })

    return await memberData.json();
}