const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const routes = require('./src/routes')

dotenv.config();

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes.setUpRoutes(app)

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})