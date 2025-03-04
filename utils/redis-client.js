const redis = require("redis");

const redisClient = redis.createClient({
  port: 6379,
});

redisClient.connect().then(() => {
  console.log("redis client connected");
});

module.exports = redisClient;
