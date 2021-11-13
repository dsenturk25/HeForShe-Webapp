
const express = require("express");
const http = require("http");
const path = require("path");
const favicon = require("serve-favicon");

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
// const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/heforshe';

const indexRouteController = require("./Routers/indexRouteController");

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/res/logo', 'sitelogo.png')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use("/", indexRouteController);

server.listen(PORT, () => {    
  console.log("Server is listening to port", PORT);
});
