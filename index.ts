// import express from 'express';
import { authenticateToken } from './auth';
import { getIdeas, makeIdea } from './controller/ideas.conroller';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import { checkExistingUser, createNewUser, getUsers } from './controller/users.controller';

// const router = getRoutes();
const app = express();
const port = 4000 || process.env.PORT;
app.use(cors())
app.use(bodyParser.json());
app.get('/get-all', getUsers);
app.post('/user', checkExistingUser);
app.post('/create-user', createNewUser);
app.post('/challenge', authenticateToken, makeIdea);
app.get('/challenge', authenticateToken, getIdeas)
app.get('/', (req: any, res: any)=> {
    return res.json({
        message: "Hellow Wooorls"
    })
});

app.listen(port, ()=> {
    console.log('Listening on port', port);
});
// const connectPost = require('./db')