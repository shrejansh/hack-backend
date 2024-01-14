import { Idea } from "../models/idea";

export default class IdeaRepository {
    static async create(user_id: number, name: string, description: string){
        try{
            const idea = await Idea.create({
                user_id,
                name,
                description,
                upvotes: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            return idea;
        }catch(e: any){
            console.log('Error ocured while creating idea', e.message);
        }
    }

    static async getAll(sortBy: string){
        let whereCondition = { order: [] };
        if(sortBy === 'upvotes'){
            whereCondition.order.push(['upvotes', 'DESC']);
        }
        if(sortBy === 'createdAt'){
            whereCondition.order.push(['createdAt', 'DESC']);
        }
        try{
            const records = await Idea.findAll(whereCondition);
            return records;
        }catch(e: any){
            console.log('Error ocured while fetching ideas', e.message);
        }
    }
}