require("dotenv").config();

const clientID = process.env.clientID;
const clientSecret = process.env.clientSecret;
const dbURI = process.env.dbURI;

module.exports = {
  google: {
    clientID:
      "379833466288-fsbhaf2tdd7gj616velmtb0k98a4uspv.apps.googleusercontent.com",
    clientSecret: "uUjDw_-FgWnaty4Vu8y0hVxm"
  },
  mongodb: {
    dbURI:
      "mongodb+srv://codesmith:codesmith@cluster0-wrdm7.mongodb.net/test?retryWrites=true&w=majority"
  },
  session: {
    cookieKey: "khkhkjhkjkjbbkjb"
  }
};
module.exports = {
  google: {
    clientID,
    clientSecret
  },
  mongodb: {
    dbURI
  },
  session: {
    cookieKey: "khkhkjhkjkjbbkjb"
  }
};
