const { fetchWeather } = require("../controllers/weatherControllers");

module.exports = (app) => {
  app.get("/weather/:city", fetchWeather);
};
