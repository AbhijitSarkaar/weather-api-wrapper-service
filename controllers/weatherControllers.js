const redisClient = require("../utils/redis-client");

const fetchWeather = async (req, res) => {
  const data = await redisClient.get(`${req.params.city}`);
  if (data !== null) {
    return res.json(JSON.parse(data));
  } else {
    const today_epoch = Math.floor(Date.now() / 1000);
    const result = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${req.params.city}/${today_epoch}?key=${process.env.API_KEY}`
    ).then((res) => res.json());
    redisClient.SETEX(`${req.params.city}`, 12 * 3600, JSON.stringify(result));
    res.json(result);
  }
};

module.exports = {
  fetchWeather,
};
