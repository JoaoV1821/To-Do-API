import { UserModel } from "../model/UserModel.js";
import { bd } from "../infra/sqlite-db.js";
import { UserDAO } from "../DAO/UserDao.js";

export const userGet = (app) => {
    const userDao = new UserDAO(bd);

    app.get('/user', (req, res) => {
       userDao.getUsers()
       .then((result) => {res.send(result)})
       .catch((err) => {res.send(err)})
    });


    app.post('/user', (req, res) => {
        const user = new UserModel(req.body.nome, req.body.email, req.body.senha);

        bd.run (
            "Insert into usuarios(nome, email, senha) values(?, ?, ?)", [user.nome, user.email, user.senha], (err) => {
                if (err) {
                    throw new Error('Não foi possível inserir valores na tabela: ');
                } else {
                    res.send('Valor inserido')
                }
            }
        );
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
        const dadoNovo = req.body;
        
        for (let i=0; i<=bd.Alunos.length; i++) {
        
            if (email == bd.Alunos[i].email) {
                const dadoAntigo = bd.Alunos[i];
              
                const user = new UserModel(
                    dadoNovo.nome  || dadoAntigo.nome,
                    dadoNovo.email || dadoAntigo.email,
                    dadoNovo.senha || dadoAntigo.senha
                );
            
              bd.Alunos.splice(i,1, user);

              res.json({"Aluno antigo": dadoAntigo, "Aluno novo": user });

            } else {
                res.send('Aluno não encontrado');
            };
        }; 

    });
};