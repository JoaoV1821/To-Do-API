import  Express  from 'express';

import { userGet } from './controller/userController.js';
import { taskGet } from './controller/taskController.js';

const app = Express();

const port = 3000;

userGet(app);
taskGet(app);

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});