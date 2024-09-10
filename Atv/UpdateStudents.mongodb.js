const database= 'BD3-NoSQL-AtlasMongoDB';

const collection='bd3-nosql-atv1';

use(database)

db[collection].updateOne(
    {cod_aluno:2},

    {$set: {nome :"Samuel de Sá", cpf : "234.545.654-09", rg: "12.435.657-9"}}

)