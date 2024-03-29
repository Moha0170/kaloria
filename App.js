const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');

const JSON_FILE_PATH = path.join(__dirname, '/public/adatok.json');
const JSON_FILE_PATH_CEL = path.join(__dirname, '/public/cel.json');
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

app.get('/bevitel/:etelNeve/:kaloria/:tomeg/:date', function(req, res) {
  console.log(req.params.etelNeve, req.params.kaloria, req.params.tomeg, req.params.date);
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

    var most = req.params.date;
    var id = 0;
    try {
        id = existingData[existingData.length - 1].id + 1
        } catch (error) {
            id = 0
        }

    var newData = {
        "id" : id,
        "date": most,
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

app.delete('/delete/:id', function(req, res) {
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
        var id = req.params.id;
        var newData = existingData.filter(function( obj ) {
            return obj.id !== parseInt(id);
        });
        fs.writeFile(JSON_FILE_PATH, JSON.stringify(newData, null, 2), (err) => {
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



app.get('/celgomb/:cel', function(req, res) {
  console.log(req.params.cel);
  fs.readFile(JSON_FILE_PATH_CEL, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
        return;
    }

    if (data.length > 0) {
        existingData = JSON.parse(data);
    }
    var newData = {
        "cel": req.params.cel
    };


    fs.writeFile(JSON_FILE_PATH_CEL, JSON.stringify(newData, null, 2), (err) => {
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


app.get('/data/:date', function(req, res) {

    fs.readFile(JSON_FILE_PATH, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }

   
        
        datum = req.params.date;

        dList = []

        const jsondata = JSON.parse(data);
        
        jsondata.forEach(element => {
            if (element.date == datum) {
                dList.push(element);
            }
        });
        
        res.status(200).send((dList));
    });
})

app.get('/kcal', function(req, res) {
    fs.readFile(JSON_FILE_PATH_CEL, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
            return;
        }
        if (data.length > 0) {
            existingData = JSON.parse(data);
        }
        res.status(200).send(existingData);
    });
})