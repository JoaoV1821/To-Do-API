import { TaskModel } from "../model/taskModel.js";

export const taskGet = (app) => {
    app.get('/task', (req, res) => {
        res.send(bd.Tarefas);
    });

    app.post('/task', (req, res) => { 
        const body = req.body;
        const task = new TaskModel(body.titulo, body.status, body.dataCriacao);
        bd.Tarefas.push(task);
        console.log(bd.Tarefas)
        res.send(task)
    });

 };