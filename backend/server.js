const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')

require("dotenv").config();

const app = express();

// const allowedOrigins = ["http://localhost:8081", "https://utd-gwc.github.io", "https://utd-gwc-api.herokuapp.com/"];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (origin == null) {
//       callback(null, true);
//     } else if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// app.use(cors(corsOptions));
app.use(cors())
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({
//     message:
//       "Welcome to the Girls Who Code website backend! Last Updated: 10/25/2020 @ 11:45:15PMCST",
//   });
// });

app.use(express.static(path.join(__dirname, '../admin-panel/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin-panel/build'))
})

require("./app/routes/event.routes.js")(app);
require("./app/routes/officer.routes.js")(app);
require("./app/routes/post.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    console.log("db.url:: " + db.url);
    process.exit();
  });
