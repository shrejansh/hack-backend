import UsersRepository from "../repositories/users.repo";
import { createIdea, getAllIdeas } from "../services/ideas.service";
import empty from 'is-empty';

export async function makeIdea(req: any, res: any){
    const reqBody = req.body;
    const user = await UsersRepository.findByEmployeeId(req.body.employee_id);
    if(empty(user)){
        return res.status(400).send({
            message: 'User not found'
        })
    }
    const { statusCode, message }  = await createIdea(user, reqBody);
    return res.status(statusCode).send({
        message,
    })
}

export async function getIdeas(req: any, res: any) {
    const sortBy = req.query.sortBy;
    const { data, statusCode, message } = await getAllIdeas(sortBy);
    if(statusCode === 200){
        return res.status(statusCode).send({
            data
        })
    }
    return res.status(statusCode).send({
        message
    })
}