const express = require('express');
import UsersRepository from "./repositories/users.repo";
import { getUsers } from "./controller/users.controller";

export function getRoutes(req, res, next){
    const router = express.Router();
    router.get('/get-all', getUsers);
    router.get('/', (req: any, res: any)=> {
        return res.json({
            message: "Hellow Wooorls"
        })
    });
}