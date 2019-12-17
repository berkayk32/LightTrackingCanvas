const http = require('http');
const express = require("express")
const hbs = require("express-handlebars")

//const SerialPort = require('serialport');
//const Readline = require('@serialport/parser-readline');
//const port = new SerialPort('/COM3', { baudRate: 9600 });
//const parser = port.pipe(new Readline({ delimiter: '\n' }));

var str = 0;
// Read the port data
/*port.on("open", () => {
  console.log('serial port open');
});
parser.on('data', data =>{

  str = data;
  console.log('got word from arduino:', data);
});
*/


const app = express()
app.use(express.static("public"))

app.engine("hbs", hbs({
  defaultLayout: "home",
  extname: ".hbs",
  layoutsDir: __dirname,
  partialsDir: __dirname
}))

app.get("/", function (req, res) {
  res.render("home.hbs", { Angle: str })
})

app.get('/data', function(req, res) {
  str++
  if(str==180){str =0;}
  res.send({ Angle: str })
 });
//const port = process.env.PORT || 8080


app.listen(8080)


