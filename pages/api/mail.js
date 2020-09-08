import axios from "axios";
const api = "https://api.gohighlevel.com/zapier/";
const token = "c0712103-41f2-43d1-ac0e-c0dcf46600ea";
var data = {
  first_name: "Mike",
  last_name: "Gamaroff",
  name: "Mike",
  email: "mike@gamaroff.net",
  phone: "917.678.2017",
  address1: "123 My St.",
  city: "Meridian",
  country: "US",
  state: "Idaho",
  postalCode: "83646",
  lead: 1,
  source: "web site",
  tags: "comma, seperated, list",
  notes: "Note to add to contact",
  timezone: "America/Boise *Not available via Zapier",
  monetary_value: "500 *Not available via Zapier",
  assignedTo: "Matt",
};
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export default (req, res) => {
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
    });
};

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
