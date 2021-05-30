const ENV = process.env.NODE_ENV || "development";
const BASE_PATH = ENV === "production" ? "/chat" : "";

module.exports = {
  env: {
    BASE_PATH
  },
  basePath: BASE_PATH
};
