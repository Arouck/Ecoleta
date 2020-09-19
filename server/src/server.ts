import express, { response } from 'express';

const app = express();

app.get(
    '/users', (request, response) => {
        console.log('Listagem de usuários');

        response.send('Hello');
    }
)

app.listen(3333)