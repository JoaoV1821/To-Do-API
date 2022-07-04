import  Express  from 'express';
import cors from 'cors';

import { userGet }   from './controller/userController.js';
import { taskGet }   from './controller/taskController.js';

const port = 3000;
const app = Express();

app.use(cors())
app.use(Express.json());

userGet(app);
taskGet(app);

app.listen(port, () => {
  console.log(`Listen to port ${port}`);
});