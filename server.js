const bodyParser = require('body-parser');
const express = require('express');
const router = require('./src/routes/routes');
const config = require('./config/config');
const cors = require('cors');
// const config = require('config');

async function main() {

    console.log('Creating API Server Agro Sapezal');

    try {

        const app = express();

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());

        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        app.use("/", router);

        app.listen(config.port);

        console.log('API Agro Sapezal Server started.');
        console.log('Port: ', config.port);

    } catch (err) {
        console.log('err -->', err);
    }
}

main();