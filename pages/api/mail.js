var axios = require("axios");

export default async function (req, res) {
  console.log(req.body);
  var data = req.body;
  /*  var data = JSON.stringify({
    first_name: "Simon",
    last_name: "Gamaroff",
    name: "Simon",
    email: "mike@gamaroff.net",
    phone: "917.678.2343",
    address1: "123 My St.",
    city: "Meridian",
    country: "US",
  }); */

  var config = {
    method: "POST",
    url: "https://rest.gohighlevel.com/v1/contacts",
    headers: {
      Authorization: "Bearer 85532424-e8e3-4532-adb9-484a288e5474",
      "Content-Type": "application/json",
    },
    data: data,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        res.statusCode = 200;
        res.end(JSON.stringify(response));
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve();
      });
  });
}
