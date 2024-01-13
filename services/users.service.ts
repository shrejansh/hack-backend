import { generateAccessToken } from "../auth";
import UsersRepository from "../repositories/users.repo";
import empty from 'is-empty';

export async function getAllUsers(){
    try{
        const records = await UsersRepository.getAll();
        return {
            statusCode: 200,
            data: records,
        }
    }catch(e){
        return {
            statusCode: 500,
            message: e.message
        }
    }
}

export async function createUser(employee_id: string){
    try{
        console.log(employee_id, 'DEBUG emp id received');
        const existingRecord = await UsersRepository.findByEmployeeId(employee_id);
        const token = await generateAccessToken(employee_id);
        if(!empty(existingRecord)){
            return {
                statusCode: 200,
                data: {
                    employee_id: existingRecord.toJSON().employee_id,
                    token,
                },
            }
        }
        const record = await UsersRepository.create(employee_id);
        
        return {
            statusCode: 200,
            data: {
                employee_id: record.toJSON().employee_id,
                token,
            },
        }
    }catch(e){
        return {
            statusCode: 500,
            message: e.message
        }
    }
}

export async function getUser(employee_id: string){
    try{
        
        const record = await UsersRepository.findByEmployeeId(employee_id);
        
        if(!empty(record)){
            const token = await generateAccessToken(employee_id);
            return {
                statusCode: 200,
                data: {
                    employee_id: record.toJSON().employee_id,
                    token,
                },
            }
        }
        console.log(record, empty(record), 'DEBUG entred');
        return {
            statusCode: 400,
            message: "User Doesn't Exist"
        }
        
    }catch(e){
        return {
            statusCode: 500,
            message: e.message
        }
    }
}