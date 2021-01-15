const express = require('express');
const app = express();
const port = 3001;

const merchantModel = require('./merchant_model');

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  next();
});
app.get('/dropzone', (req, res) => {
  merchantModel.getDropZone()
    .then(response => {
      console.log("hii",response);
      res.status(200).send(response);
    })
    .catch(error => {
      console.log("hello");
      res.status(500).send(error);
    });
});


app.get('/rules', (req, res) => {
  merchantModel.getRules()
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });

});

app.get('/gun', (req, res) => {
  merchantModel.getGun()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});