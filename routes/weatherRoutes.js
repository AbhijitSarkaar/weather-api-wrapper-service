const { fetchWeather } = require("../controllers/weatherController");

module.exports = (app) => {
  app.get("/weather/:city", fetchWeather);
};
