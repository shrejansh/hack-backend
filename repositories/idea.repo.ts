import { Idea } from "../models/idea";

export default class IdeaRepository {
    static async create(user_id: number, name: string, description: string){
        try{
            const idea = await Idea.create({
                user_id,
                name,
                desc: description,
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

    static async findByName(name: string){
        try{
            const record = await Idea.findOne({
                where:{
                    name
                }
            });
            return record;
        }catch(e: any){
            console.log('Error occured while fetching ideas by name', e.message);
        }
    }

    static async findById(id: number){
        try{
            const record = await Idea.findOne({
                where:{
                    id
                }
            });
            return record;
        }catch(e: any){
            console.log('Error occured while fetching ideas by name', e.message);
        }
    }

    static async updateUpvote(idea_id: number, upvote: boolean, transaction?: any){
        try{
            const record = await Idea.findOne({
                where: {
                    id: idea_id,
                }
            });
            console.log(upvote, 'DEBUG upvote');
            await Idea.update({
                upvotes: upvote ? Number(record.toJSON().upvotes) + 1 : Number(record.toJSON().upvotes) - 1,
            }, {
                where: {
                    id: idea_id,
                },
                transaction
            });
        }catch(e: any){
         console.log('Error ocurred while adding upvote', e.message)   
        }
    }
}