import express from "express";
import { EmplRoutes } from "./routes/EmplRoutes";
import { EmployeeRepository } from "./repository/EmployeeRepository";
import { EmplService } from "./services/EmplService";
import { EmplController } from "./controllers/EmplController";


export class Server {

    private app = express();

    private employeeRepository = new EmployeeRepository();
    private emplService = new EmplService(this.employeeRepository);
    private emplController = new EmplController(this.emplService);
    private routes = new EmplRoutes(this.app, this.emplController);

    private config(){
        this.app.use(express.json());
    }
    private loadRoutes(){
        this.routes.loadRoutes();
    }

    public startServer(){
        this.config();
        this.loadRoutes();
        this.app.listen(3000, function () {
            console.log("Server running on port 3000");
        })
        this.app.on('error', (error: any) => {
            console.error('Error: ', error);
        });
    }
}