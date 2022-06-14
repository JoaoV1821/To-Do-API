export const userGet = (app) => {
    app.get('/userGet', (req, res) => {
        res.send('User Get');
    });
 };

