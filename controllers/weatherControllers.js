const fetchWeather = async (req, res) => {
  const today_epoch = Math.floor(Date.now() / 1000);
  const result = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${req.params.city}/${today_epoch}?key=${process.env.API_KEY}`
  ).then((res) => res.json());
  res.send(result);
};

module.exports = {
  fetchWeather,
};
