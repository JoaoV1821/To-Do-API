export const userGet = (app) => {
    app.get('/user', (req, res) => {
        res.send('Rastreamento da aplicação sendo feito com nodemon');
    });

    app.post('/user', (req, res) => {
        res.send("Rota POST de usuario ativada: usuário adicionado ao banco de dados");
    });
};