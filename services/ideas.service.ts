import IdeaRepository from "../repositories/idea.repo";
import IdeaTagRepository from "../repositories/idea_tag.repo";
import empty from 'is-empty';
import TagsRepository from "../repositories/tags.repo";
import UserIdeaRepository from "../repositories/user_idea.repo";
import UsersRepository from "../repositories/users.repo";
import sequelize from "../models";

export async function createIdea(user: any, reqBody: any) {
    const name = reqBody.name;
    const description = reqBody.description;
    const user_id = user.id;
    const tag_id_list = reqBody.tags;
    try{
        const existingIdea = await IdeaRepository.findByName(name);
        if(!empty(existingIdea)){
            return {
                statusCode: 400,
                message: 'Challenge with same name already exists',
            }  
        }
        const createdIdea = await IdeaRepository.create(user_id, name, description);
        for(const tag_id of tag_id_list){
            await IdeaTagRepository.create(createdIdea.toJSON().id, tag_id);
        }
        return {
            statusCode: 200,
            message: 'Successfully created new Challenge',
        }
    }catch(e: any){
        console.log('Error occured in idea service', e.message);
        return {
            statusCode: 500,
            message: e.message
        }
    }
}

export async function getAllIdeas(sortBy: string){
    try{
        const records = await IdeaRepository.getAll(sortBy);
        const data = [];
        for(const record of records){
            const jsonRecord = record.toJSON();
            const tags = await IdeaTagRepository.findByIdeaId(jsonRecord.id);
            let tagList = [];
            for(const tag of tags){
                console.log(tag.toJSON(), 'DEBUG tags');
                const tagRecord = await TagsRepository.findById(tag.toJSON().tag_id);
                console.log(tagRecord, 'DEBUG tags record');
                tagList.push(tagRecord.toJSON().name); 
            }
            const temp = {id: jsonRecord.id, name: jsonRecord.name, desc: jsonRecord.desc, upvotes: jsonRecord.upvotes, createdAt: jsonRecord.createdAt, tags: tagList};
            //
            // temp.tags.push(tags);
            data.push(temp);
        }
       
        return {
            statusCode: 200,
            data: data
        }
    }catch(e: any){
        console.log('Error occured in idea service', e.message);
        return {
            statusCode: 500,
            message: e.message
        }
    }
}

export async function upvoteIdea(reqBody: any){
    const employee_id = reqBody.employee_id;
    const idea_id = reqBody.idea_id;
    const upvote = reqBody.upvote;
    const user = await UsersRepository.findByEmployeeId(employee_id);
    const idea = await IdeaRepository.findById(idea_id);
    if(empty(user)){
        return {
            statusCode: 400,
            message: "User doesn't exist"
        }
    }
    if(empty(idea)){
        return {
            statusCode: 400,
            message: "Challenge doesn't exist"
        }
    }
    const t = await sequelize.transaction({ autocommit: false });
    try{
        
        const existingRelation = await UserIdeaRepository.findByUserIdAndIdeaId(user.toJSON().id, idea_id);
        if(!empty(existingRelation)){
            await UserIdeaRepository.update(user.toJSON().id, idea_id, upvote, t);
        }else{
            await UserIdeaRepository.create(user.toJSON().id, idea_id, t);
        }
        await IdeaRepository.updateUpvote(idea_id, upvote, t);
        t.commit();
        return {
            statusCode: 200,
            message: 'Successfully upvoted challenge'
        }
    }catch(e){
        t.rollback();
        console.log('Error occured in idea service', e.message);
        return {
            statusCode: 500,
            message: e.message
        }
    }
}