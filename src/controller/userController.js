import { UserModel } from "../model/UserModel.js";
import { bd } from "../infra/bd.js";

export const userGet = (app) => {
    app.get('/user', (req, res) => {
        res.send(bd.Alunos);
    });

    app.post('/user', (req, res) => {
        const body = req.body;
        const user = new UserModel(body.nome, body.email, body.senha);
        
        bd.Alunos.push(user);
        res.send(task);
    });
};