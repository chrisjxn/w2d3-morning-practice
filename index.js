const express = require('express'),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser'),
    ctrl = require('./controller');


app.use(bodyParser.json());

app.get('/api/getUsers', ctrl.get)

app.post('/api/addUser', ctrl.post)

app.delete('/api/deleteUser/:id', ctrl.delete)





app.listen(port, () => console.log(`listening on port ${port}`));