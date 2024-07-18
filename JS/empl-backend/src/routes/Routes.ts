import { Application } from 'express';
import { Router } from "express";
import { EmplController } from '../controllers/EmplController';

export class EmplRoutes {
    private app: Application;
    private emplController: EmplController = new EmplController();
    private router = Router();

    constructor(app: Application){
        this.app = app;
        this.app.use('/empl', this.router);
    }

    public loadRoutes(){
        this.router.get('/hello', this.emplController.sayHello);
        this.router.get('/', this.emplController.getAll);
        this.router.get('/:id', this.emplController.getById);
        this.router.post('/', this.emplController.create);
        this.router.put('/:id', this.emplController.updatePosition);
        this.router.delete('/:id', this.emplController.delete);
        this.router.get('/position/:position', this.emplController.getByPosition);
    }
}