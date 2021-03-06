const express = require('express');
const path = require('path');


const app = express()
const port = process.env.PORT || 7700;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

   
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, './')));

app.listen(port, () => console.log(`App listening on port ${port}!`))

