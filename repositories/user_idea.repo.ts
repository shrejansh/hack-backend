import { Tag } from "../models/tag";
import { UserIdea } from "../models/user_idea";

export default class UserIdeaRepository {
    static async create(userId: number, ideaId: number, transaction?: any){
        try{
            await UserIdea.create({
                user_id: userId,
                idea_id: ideaId,
                upvoted: true,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, transaction)
        }catch(e){
            console.log('Error ocurred while creating user idea', e.message);
        }
    }

    static async findByUserIdAndIdeaId(userId: number, ideaId: number){
        try{
            console.log(UserIdea, Tag, 'DEBUG koo koo');
            const record = await UserIdea.findOne({
                where: {
                    user_id: userId,
                    idea_id: ideaId,
                }
            });
            return record;
        }catch(e){
            console.log('Error ocurred while finding user idea', e.message);
        }
    }

    static async update(userId: number, ideaId: number, upvote: boolean, transaction?: any){
        try{
            // console.log(upvote, '')
            await UserIdea.update(
                 {
                    upvoted: upvote,
                }, {
                    where: {
                        idea_id: ideaId,
                        user_id: userId,
                    },
                    transaction,
                },
            );
        }catch(e){
            console.log('Error ocurred while updating user idea', e.message);
        }
    }
}