const express = require('express');
const app = express();
const home = require('./routes/home');
const library = require('./routes/library');
app.use(express.json());
app.use('/', home);


app.use('/api/library', library);



const port = process.env.PORT || 4000;
app.listen(port, () => console.log("listening on port 4000..."));


