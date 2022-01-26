import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { UserEntity } from "../entity/user.entity";
import { UserModel } from "../model/user.model";

export class UserController{
    
    public getUser(req : Request, res : Response){
        const model = new UserModel;
        console.log("HEADER ",req.headers.authorization);
        return model.getUser(req,res);
    }

    public createUser(req : Request, res : Response){
        const model = new UserModel;
        const prop = getConnection().getMetadata(UserEntity).ownColumns.map(column => column.propertyName);
        // const prop_type = getConnection().getMetadata(UserEntity);
        // console.log(prop_type);
        const slice = prop.slice(1);

        for(let i = 0; i < Object.keys(slice).length; i++){
            let s = slice[i].valueOf();
            let d = Object.keys(req.body);
            // console.log("VALUE BODY ",d[i]);
            if(d[i] != s){
                return res.status(400).json({message : "Field "+s+" is not found"});
            }
        }
            return model.Create(req,res);
    }
}

// export const getUser = async (req : Request, res : Response) : Promise<Response> =>{
//     const model = new UserModel;
//     return model.getUser(req,res);
// }

// export const createUser = async (req : Request, res : Response) : Promise<Response> =>{
   

// //    Object.keys(body).forEach(function(key){
// //        let value = req.body[key];
// //        if(value != UserEntity){
// //            return res.status(400).json({message : "Field Key "+value+" is Not Found"});
// //        }
// //    })

//     const model = new UserModel;
//     const prop = getConnection().getMetadata(UserEntity).ownColumns.map(column => column.propertyName);
//     const slice = prop.slice(1);

//     for(let i = 0; i < Object.keys(req.body).length; i++){
//         let s = slice[i].valueOf();
//         let d = Object.keys(req.body);
//         console.log("VALUE BODY ",d[i]);
//         if(d[i] != s){
//             return res.status(400).json({message : "Field "+s+" is not found"});
//         }
//     }
//         return model.Create(req,res);
// }