import { Tag } from "../models/tag";

export default class TagsRepository {
    static async getAll(){
        try{
            const records = await Tag.findAll({
                attributes: ['id', 'name'],
            });
            return records;
        }catch(e){
            console.log('Error occurred while fetching all tags', e.message);
        }
    }

    static async findById(id: number){
        try{
            const record = await Tag.findOne({
                where: {
                    id,
                },
                attributes: ['name'],
            });
            return record;
        }catch(e){
            console.log('Error occurred while fetching on tag', e.message);
        }
    }
}