const express = require('express')
const app = express()
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

//middlewares in action
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//routes
const api = require('./src/api/rootRouter');
app.use(`/api`, api);

//server running 
const port = process.env.PORT || 3000
app.get('/', (req, res) => res.send(`OrdersJam says hi! on port: ${port}`))
app.listen(port, () => console.log(`OrdersJam Server listening on port ${port}!`))

