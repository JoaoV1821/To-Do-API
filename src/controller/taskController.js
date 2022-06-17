export const taskGet = (app) => {
    app.get('/taskGet', (req, res) => {
        res.send('Task get');
    });

    app.post('/task', (req, res) => { 
        res.send("Rota POST de tarefa ativada: tarefa adicionada ao banco de dados")
    });
 };