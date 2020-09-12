import axios from "axios";

const token = "85532424-e8e3-4532-adb9-484a288e5474";

/* export default (req, res) => {
  return new Promise((resolve) => {
    axios(config)
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((error) => {
        return error;
      });
  }); */

export default async function (req, res) {
  var config = {
    method: "POST",
    url: "https://rest.gohighlevel.com/v1/contacts/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: `{
      "first_name": "Simon",
      "last_name": "Gamaroff",
      "name": "Mike",
      "email": "mike@gamaroff.net",
      "phone": "917.678.2017",
      "address1": "123 My St.",
      "city": "Meridian",
      "country": "US"
    }`,
  };
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return new Promise((resolve, reject) => {
    axios(config)
      .then((response) => {
        console.log(response);
        res.end(JSON.stringify(response));
        resolve(response);
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        //resolve(error);
      });
  });
}

/*

  return axios
    .post(
      "https://api.gohighlevel.com/zapier/add_update_opportunity",
      data,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
      // This is where you push all the selecter unit data to the redux state so it can be immediately updated
    })
    .catch((err) => {
      console.log(err);
      return err;
    }); */

/*
  console.log(data);
  return axios(config)
    .then(function (response) {
      console.log(response);
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
} */

/*
{
    "web":{
        "client_id":"907024976593-dh568ubgom2evbvdf9puvigjf05t7dqc.apps.googleusercontent.com",
        "project_id":"quickstart-1592888829168",
         "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
         "client_secret":"FB8yLWwZ1Qp8-QBtNiCz6950",
         "javascript_origins":["http://caqophony.com"]}
    }
*/
