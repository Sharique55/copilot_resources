import { Request, Response } from "express";
import { EmplService } from "../services/EmplService";

export class EmplController {

    private emplService: EmplService = new EmplService();

    public sayHello(req:Request, res:Response){
        res.send("Hello World");
    }

    public async getAll(req:Request, res:Response){
        const allEmpl = await this.emplService.getAllEmployees();
        res.send(allEmpl);
    }
}