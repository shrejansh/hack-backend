import 'dotenv/config';
import { User } from "../models/user";

export default class UsersRepository {
    static async getAll(){
        try{
            const records = await User.findAll();
            return records;
        }catch(e){
            console.log("Error in users repo: ", e.message)
        }
    }

    static async create(employee_id: string){
        try{
            return User.create({ employee_id, createdAt: new Date(), updatedAt: new Date()});
            // const token  = await generateAccessToken(employee_id);
        }catch(e){
            console.log('Error occurred while creating new user', e.message);
        }
    }

    static async findByEmployeeId(employee_id: string){
        try{
            const record = await User.findOne({
                where: {
                    employee_id
                }
            });
            return record;
        }catch(e){
            console.log('Error occurred while finding existing user', e.message);
        }
    }
}