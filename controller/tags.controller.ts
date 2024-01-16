import { getAllIdeas } from "../services/ideas.service";
import { allTags } from "../services/tags.service";

export async function getTags(req: any, res: any){
    const { data, statusCode, message } = await allTags();
    if(statusCode === 200){
        return res.status(statusCode).send({
            data
        })
    }
    return res.status(statusCode).send({
        message
    })
}