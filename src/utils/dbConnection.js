const config = require('../../config/config');
const sql = require('mssql');

async function runQuery(query) {
    return new Promise((resolve, reject) => {

        try {
            console.log('Starting connection to database');
            sql.connect(config.dbConfig, function (err) {
                console.log('Connected to database');

                if (err) {
                    console.log(err);
                    return "primeiro erro"
                }

                var request = new sql.Request();

                request.query(query, function (err, recordset) {

                    if (err) {
                        reject(err);
                    } else {
                        resolve(recordset);
                    }

                })
            });
        } catch (err) {
            reject(err);
        }


    });
    /* console.log('ENTROUUU');

     */

}

module.exports = runQuery;