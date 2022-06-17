export const userGet = (app) => {
    app.get('/user', (req, res) => {
        res.send('Rastreamento da aplicação sendo feito com nodemon');
    });

    app.post('/user', (req, res) => {
        const body = req.body;
        res.send(body);
    });
};