import { Request, Response } from "express";
import { EmplService } from "../services/EmplService";

export class EmplController {

    private emplService: EmplService;

    constructor (emplService: EmplService){
        console.log("EmplController created");
        this.emplService = emplService;
    }

    public sayHello(req:Request, res:Response){
        res.send("Hello World");
    }

    public async getAll(req:Request, res:Response){
        console.log("this: " + this);
        const allEmpl = await this.emplService.getAllEmployees();
        res.send(allEmpl);
    }

    public async getById(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const empl = await this.emplService.getEmployeeById(id);
        res.send(empl);
    }

    public async create(req:Request, res:Response){
        const employee = req.body;
        const newEmpl = await this.emplService.createEmployee(employee);
        res.send(newEmpl);
    }

    public async updatePosition(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const position = req.body.position;
        const updatedEmpl = await this.emplService.updateEmployeePosition(id, position);
        res.send(updatedEmpl);
    }

    public async delete(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const deletedEmpl = await this.emplService.deleteEmployee(id);
        res.send(deletedEmpl);
    }

    public async getByPosition(req:Request, res:Response){
        const position = req.params.position;
        const empl = await this.emplService.getEmployeesByPosition(position);
        res.send(empl);
    }
}