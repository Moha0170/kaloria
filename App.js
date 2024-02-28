const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');

const JSON_FILE_PATH = path.join(__dirname, '/public/adatok.json');
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.get('/json/:valami', function(req, res) {
    console.log(req.params.valami)
})

app.get('/bevitel/:etelNeve/:kaloria/:tomeg', function(req, res) {
  console.log(req.params.etelNeve, req.params.kaloria, req.params.tomeg);
  fs.readFile(JSON_FILE_PATH, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
        return;
    }

    let existingData = [];
    if (data.length > 0) {
        existingData = JSON.parse(data);
    }

    var newData = {
      "etelNeve": req.params.etelNeve,
      "kaloria": req.params.kaloria,
      "tomeg": req.params.tomeg
    };

    existingData.push(newData);

    fs.writeFile(JSON_FILE_PATH, JSON.stringify(existingData, null, 2), (err) => {
        if (err) {
            console.error('Error writing file:', err);
            res.status(500).send('Error writing file');
            return;
        }
        console.log('Data written successfully');
        res.status(200).send('Data written successfully');
    });
  });
})