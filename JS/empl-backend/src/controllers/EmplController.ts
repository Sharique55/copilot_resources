import { Request, Response } from "express";

export class EmplController {

    public sayHello(req:Request, res:Response){
        res.send("Hello World");
    }
}