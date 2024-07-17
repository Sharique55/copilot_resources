import { Application } from 'express';
import { Router } from "express";
import { EmplController } from '../controllers/EmplController';

export class Routes {
    private app: Application;
    private emplController: EmplController = new EmplController();
    private router = Router();

    constructor(app: Application){
        this.app = app;
        this.app.use('/api', this.router);
    }

    public loadRoutes(){
        this.router.get('/hello', this.emplController.sayHello);
    }
}