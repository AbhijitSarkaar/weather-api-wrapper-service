const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

require("./routes/weatherRoutes")(app);

app.listen(process.env.PORT);
