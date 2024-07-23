import { Request, Response } from "express";
import { EmployeeRepository } from "../repository/EmployeeRepository";
import { InMemoryEmplRepo } from "../repository/InMemoryRepository";

export class EmplController {

    private emplRepository: InMemoryEmplRepo = new InMemoryEmplRepo();

    public sayHello(req:Request, res:Response){
        res.send("Hello World");
    }

    public async getAll(req:Request, res:Response){
        const allEmpl = await this.emplRepository.getAllEmployees();
        res.send(allEmpl);
    }

    public async getById(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const empl = await this.emplRepository.getEmployeeById(id);
        res.send(empl);
    }

    public async create(req:Request, res:Response){
        const employee = req.body;
        const newEmpl = await this.emplRepository.createEmployee(employee);
        const newEmplId = (newEmpl as any).insertId;
        res.send(`Employee with id ${newEmplId} created`);
    }

    public async updatePosition(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const position = req.body.position;
        const updateResult = await this.emplRepository.updateEmployeePosition(id, position);
        if((updateResult as any).affectedRows === 0){
            res.send(`Employee with id ${id} not found`);
            return;
        }
        res.send(`Position of employee with id ${id} updated to ${position}`);
    }

    public async delete(req:Request, res:Response){
        const id = parseInt(req.params.id);
        const deletedEmpl = await this.emplRepository.deleteEmployee(id);
        res.send(deletedEmpl);
    }

    public async getByPosition(req:Request, res:Response){
        const position = req.query?.position as string;
        if (!position) {
            res.send("Position query parameter is required");
            res.status(400);            
        }
        const empl = await this.emplRepository.getEmployeesByPosition(position);
        res.send(empl);
    }
}