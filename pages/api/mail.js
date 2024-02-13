var axios = require("axios");

export default async function (req, res) {
  console.log(req.body);
  var data = req.body;

  var config = {
    method: "POST",
    url: process.env.ZAPIER_URL,
    headers: {
      Authorization: process.env.ZAPIER_TOKEN,
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
