const database= 'BD3-NoSQL-AtlasMongoDB';

const collection='bd3-nosql-atv1';

use(database)

db[collection].find(

    
    {"cpf": "342.124.790-03"},

    {cod_aluno:0}

);
