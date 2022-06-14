export const taskGet = (app) => {
    app.get('/taskGet', (req, res) => {
        res.send('Task get');
    });
 };