import { Application } from 'express';
import { Router } from "express";
import { EmplController } from '../controllers/EmplController';

export class EmplRoutes {
    private app: Application;
    private emplController: EmplController;
    private router = Router();

    constructor(app: Application, emplController: EmplController){
        console.log("EmplRoutes created");
        this.emplController = emplController
        this.app = app;
        this.app.use('/empl', this.router);
    }

    public loadRoutes(){
        this.router.get('/hello', (req,res) => {
            this.emplController.sayHello(req,res);
        });
        this.router.get('/', (req, res) => {
            this.emplController.getAll(req, res);
        });
        this.router.get('/:id', (req, res) => {
            this.emplController.getById(req, res);
        });
        this.router.post('/', (req, res) => {
            this.emplController.create(req, res);
        });
        this.router.put('/:id', (req, res) => {
            this.emplController.updatePosition(req, res);
        });
        this.router.delete('/:id', (req, res) => {
            this.emplController.delete(req, res);
        });
        this.router.get('/position/:position', (req, res) => {
            this.emplController.getByPosition(req, res);
        });
    }
}