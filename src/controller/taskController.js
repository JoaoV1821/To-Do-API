export const taskGet = (app) => {
    app.get('/taskGet', (req, res) => {
        res.send('Task get');
    });

    app.post('/task', (req, res) => { 
        const body = req.body;
        res.send(body)
    });

 };