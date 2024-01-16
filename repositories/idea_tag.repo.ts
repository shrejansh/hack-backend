import { IdeaTag } from "../models/idea_tag";

export default class IdeaTagRepository {
    static async create(ideaId: number, tagId: number){
        try{
            await IdeaTag.create({idea_id: ideaId, tag_id: tagId, createdAt: new Date(), updatedAt: new Date()});
        }catch(e){
            console.log('Error occurred while creating idea tag records', e.message);
        }
    }

    static async findByIdeaId(ideaId: number){
        try{
            const records = await IdeaTag.findAll({
                where: {
                    idea_id: ideaId,
                }
            });
            return records;
        }catch(e){
            console.log('Error occurred while getting idea tag records', e.message);
        }
    }
}