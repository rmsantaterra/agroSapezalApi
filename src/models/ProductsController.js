const dbConnection = require('../utils/dbConnection');
const request = require('request-promise').defaults({ encoding: null });

async function getByBarCode(req, res) {

    try {
        const { barcode } = req.params;

        const query = `SELECT p.Nome as name, p.CódigoBarras as barcode, p.seq as seqNum, hpp.Preco as price, p.ImagemUrl as imageUrl from Produto p inner join vwHistProdPrecoAtual hpp on hpp.IDProduto = p.IDProduto where p.IDFilial = 15832 and p.CódigoBarras = '${barcode}'`;

        dbConnection(query).then(products => {
            if (products.rowsAffected <= 0) {
                console.log('Finished execution of method');
                return res.status(404).send({ "code": "0003", "message": "Product NOT FOUND" });
            }

            console.log('Finished execution of method');
            return res.status(200).send(products.recordset[0]);
        }).catch(err => {
            console.log(err);
            console.log('Finished execution of method');
            return res.status(422).send({ "code": "0002", "message": "ERROR to query product by barCode", "detail": err });
        });

    } catch (err) {

        return res.status(400).send({ "status": "040", "description": "Error trying to execute function" });
    }
}

async function getAllProducts(req, res) {

    try {

        const query = 'SELECT p.Nome as name, p.CódigoBarras as barcode, p.seq as seqNum, hpp.Preco as price, p.ImagemUrl as imageUrl from Produto p inner join vwHistProdPrecoAtual hpp on hpp.IDProduto = p.IDProduto where p.IDFilial = 15832';

        dbConnection(query).then(products => {
            if (products.rowsAffected <= 0) {
                console.log('Finished execution of method');
                return res.status(404).send({ "code": "0003", "message": "Products NOT FOUND" });
            }

            console.log('Finished execution of method');
            return res.status(200).send(products.recordset);
        }).catch(err => {
            console.log(err);
            console.log('Finished execution of method');
            return res.status(422).send({ "code": "0002", "message": "ERROR to query getAllProducts", "detail": err });
        });

    } catch (err) {

        return res.status(400).send({ "status": "040", "description": "Error trying to execute function" });
    }
}

async function getImageByUrl(req, res) {

    try {
        const { url } = req.query;

        if (url) {

            request.get(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    data = Buffer.from(body).toString('base64');
                    res.status(200).send(data);
                } else {
                    res.status(404).send({ "code": "0003", "message": `Something happend: ${error}` });
                }
            });

        } else {
            return res.status(404).send({ "code": "0003", "message": "You need to insert url in req.query" });
        }

    } catch (err) {
        console.log(err);

        return res.status(400).send({ "status": "040", "description": "Error trying to execute function" });
    }
}

module.exports = { getByBarCode, getAllProducts, getImageByUrl }