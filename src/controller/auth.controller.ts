import { Request, Response } from "express";
import { AuthModel } from "../model/auth.model";

export class AuthController{

    public getAuth(req : Request, res : Response, next : any){
        const header = req.headers.authorization;
        console.log("TEST");
        if(header == undefined || header == "" || header == null){
            return res.status(401).send({message : "AUTHENTICATION IS REQUIRED"});
        }

        const text_bearer = header.split(" ");
        const split = text_bearer[0];
        if(split != "Bearer"){
            return res.status(401).send({message : "Bearer must be implementation in Authentication"});
        }



        next();
    }

    public Sign(req : Request, res : Response){

        const model = new AuthModel;
        const first_name = req.body.first_name;
        const password = req.body.password;

        return model.Sign(first_name, password, res);

    }
}