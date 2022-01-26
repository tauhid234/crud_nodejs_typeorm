import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { UserEntity } from "../entity/user.entity";

export class AuthModel{

    public async Sign(first_name : string, password : string, res : Response) : Promise<Response>{
        const auth = await getRepository(UserEntity).find({first_name : first_name, password : password});
        console.log(auth);
        if(auth.length == 0){
            return res.status(404).send({message : "User atau password anda salah"});
        }

        return res.status(200).send({data : auth, token : "!@#24"});
    }
}