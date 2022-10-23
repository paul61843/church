const express = require("express");
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 5656;
const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://paul61843:paul61843@cluster0.pyhkqqg.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Database is connected.'))
    .catch(err => console.log(err));

const Church = mongoose.model('church', { name: String } )
const kitty = new Church({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.get("/", (req, res) => {
  console.log('find');
  res.send("hello world!");
});

// app.get("/find", async (req, res) => {
//     console.log('find');
//     const memberData = await findMemberData('id');
//     console.log(memberData)
//     res.json(memberData);
// });

// app.listen(port, () => {
//   console.log(`app running on ${port}`);
// });

// async function findMemberData(id) {
//     const url = `https://data.mongodb-api.com/app/data-ybwtl/endpoint/data/v1/action/findOne`
//     const headers = {
//         "Content-Type": "application/json",
//         "Access-Control-Request-Headers": "*",
//         "api-key": "lW050ldNtvMHO0xqzumxyTscgoHviynOVDbsrdd0CC4xaSvJUsiY8a2CWRkehKRV",
//     }
//     const body = {
//         "collection":"member",
//         "database":"church",
//         "dataSource":"Cluster0",
//         "filter": { "name" : id}
//     }

//     const memberData = await fetch(url, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(body)
//     })

//     return await memberData.json();
// }