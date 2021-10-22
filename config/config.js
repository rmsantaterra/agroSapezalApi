// {
//     "port": 8080,
//     "db-config": {
//         "user": "uMolecao",
//         "password": "Molecao1",
//         "server": "petshopcontrol.brazilsouth.cloudapp.azure.com",
//         "database": "PetShopControl",
//         "options": {
//             "trustedConnection": true,
//             "encrypt": true,
//             "enableArithAbort": true,
//             "trustServerCertificate": true
//         }
//     }
// }

const config = {
    port: 8080,
    dbConfig: {
        user: 'uMolecao',
        password: 'Molecao1',
        server: 'petshopcontrol.brazilsouth.cloudapp.azure.com',
        database: 'PetShopControl',
        options: {
            trustedConnection: true,
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,

        }
    }
}

module.exports = config;