import { UserModel } from "../model/UserModel.js";
import { bd } from "../infra/bd.js";

export const userGet = (app) => {
    app.get('/user', (req, res) => {
        res.send(bd.Alunos);
    });

    app.post('/user', (req, res) => {
        const user = new UserModel(req.body.nome, req.body.email, req.body.senha);

        bd.Alunos.push(user);
        res.send(user);
    });

    app.get('/user/:email', (req, res) => {
        const email = req.params.email;

        for (let i = 0; i < bd.Alunos.length; i++) {

            if (email == bd.Alunos[i].email) {
                res.send(email);
            } else {
                res.send('Email não encontrado');
            }
        }
    });

    app.delete('/user/:email', (req, res) => {
        const email = req.params.email;
        const emailIndex = bd.Alunos.findIndex(aluno => aluno.email == email);
        if (emailIndex > -1) {
            bd.Alunos.splice(emailIndex, 1);

            res.json({
                "Usuário excluído": bd.Alunos[emailIndex],
                "Posição no banco": emailIndex
            });
        } else {
            res.send('Aluno não encontrado')
        }
    });

    app.put('/user/:email', (req, res) => {
        const email = req.params.email;
        
        for (let i=0; i<=bd.Alunos.length; i++) {
            const dadoNovo = req.body;
            const dadoAntigo = bd.Alunos[i]

            if (email == bd.Alunos[i].email) {
                
                const user = new UserModel(
                    dadoAntigo.nome || dadoNovo.aluno, dadoAntigo.email || dadoNovo.email, dadoAntigo.senha || dadoNovo.senha
                );

              const userAlterado = bd.Alunos.shift(i,1, user);

              res.json({"Aluno antigo": dadoAntigo, "Aluno novo": userAlterado });

            } else {
                res.send('Aluno não encontrado')
            };
        }; 

    });
};