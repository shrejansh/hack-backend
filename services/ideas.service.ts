import IdeaRepository from "../repositories/idea.repo";

export async function createIdea(user: any, reqBody: any) {
    const name = reqBody.name;
    const description = reqBody.description;
    const user_id = user.id;
    try{
        await IdeaRepository.create(user_id, name, description);
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
        return {
            statusCode: 200,
            data: records
        }
    }catch(e: any){
        console.log('Error occured in idea service', e.message);
        return {
            statusCode: 500,
            message: e.message
        }
    }
}