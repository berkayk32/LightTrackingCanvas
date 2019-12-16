const http = require('http');
const express = require("express")
const hbs = require("express-handlebars")

const app = express()


app.use(express.static("public"))

app.engine("hbs", hbs({
  defaultLayout: "home",
  extname: ".hbs",
  layoutsDir: __dirname ,
  partialsDir:__dirname 
}))

app.get("/", function (req, res) {
  res.render("home.hbs")
})  


const port = process.env.PORT || 8080


app.listen(port)


