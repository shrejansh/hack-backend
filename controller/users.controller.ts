import { createUser, getAllUsers, getUser } from "../services/users.service";

export async function getUsers(req: any, res: any){
    const { statusCode, message, data } = await getAllUsers();
    if (statusCode === 200){
        return res.status(statusCode).send({
            data,
        })
    }else{
        return res.status(statusCode).send({
            message,
        })
    }
}

export async function createNewUser(req: any, res: any){
    const employee_id = req.body.employee_id;
    const { statusCode, message, data } = await createUser(employee_id);
    if(statusCode === 200){
        return res.status(statusCode).send({
            data
        })
    }else{
        return res.status(statusCode).send({
            message,
        })
    }
}

export async function checkExistingUser(req: any, res: any){
    const employee_id = req.body.employee_id;
    console.log(req.body, 'DEBUG request');
    const { statusCode, message, data } = await getUser(employee_id);
    if(statusCode === 200){
        return res.status(statusCode).send({
            data
        })
    }else{
        return res.status(statusCode).send({
            message,
        })
    }
}