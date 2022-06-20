import  Express  from 'express';

import { userGet }   from './controller/userController.js';
import { taskGet }   from './controller/taskController.js';
import { UserModel } from './model/UserModel.js';
import { TaskModel } from './model/taskModel.js';

const port = 3000;
const app = Express();

const user = new UserModel('João', 'email@gmail.com', '12345');
const task = new TaskModel('Titulo' ,'feito', 'descricao', '20-06-2022');

userGet(app);
taskGet(app);


console.log(user)
console.log(task)

app.use(Express.json());

userGet(app);
taskGet(app);

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});