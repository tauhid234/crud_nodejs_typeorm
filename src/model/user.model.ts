import { getRepository } from "typeorm";
import { Request, Response  } from "express";
import { UserEntity } from "../entity/user.entity";

export class UserModel{

    public async getUser(req : Request, res : Response) : Promise<Response>{
        const user =  await getRepository(UserEntity).find();
        return res.json(user);
    }

    public async Create(req : Request, res : Response) : Promise<Response>{
        const newuser =  getRepository(UserEntity).create(req.body);
        const result = await getRepository(UserEntity).save(newuser);
        return res.status(200).json(result);
    }
}