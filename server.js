import express from "express";
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app  = express();
const PORT = 3111;

app.use(bodyParser.json());

/// all routes are start with the `/user`
app.use('/users',usersRoutes);

app.get('/',(req,res)=>res.send('Server is running...'));

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}...`);
});
