// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser')
import { checkExistingUser, createNewUser, getUsers } from './controller/users.controller';

// const router = getRoutes();
const app = express();
const port = 4000 || process.env.PORT;
app.use(bodyParser.json());
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     // res.write('you posted:\n')
//     // res.end(JSON.stringify(req.body, null, 2))
//   })
app.get('/get-all', getUsers);
app.post('/user', checkExistingUser);
app.post('/create-user', createNewUser);
app.get('/', (req: any, res: any)=> {
    return res.json({
        message: "Hellow Wooorls"
    })
});

app.listen(port, ()=> {
    console.log('Listening on port', port);
});
// const connectPost = require('./db')