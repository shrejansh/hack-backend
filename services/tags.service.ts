import TagsRepository from "../repositories/tags.repo"

export async function allTags(){
    try{
        const records = await TagsRepository.getAll();
        return {
            statusCode: 200,
            data: records,
        }
    }catch(e){
        return {
            statusCode: 500,
            message: e.message,
        }
    }
}