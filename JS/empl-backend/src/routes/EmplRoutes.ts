import { Application } from 'express';
import express, { Router } from "express";
import { EmplController } from '../controllers/EmplController';

export class EmplRoutes {
    private app: Application;
    private emplController: EmplController = new EmplController();
    private router = Router();

    constructor(app: Application, ){
        this.app = app;
        this.router.use(express.json());
        this.app.use('/empl', this.router);
    }

    public loadRoutes(){
        this.router.get('/hello', (req,res) => {
            this.emplController.sayHello(req,res);
        });
        this.router.get('/', (req, res) => {
            this.emplController.getAll(req, res);
        });
        this.router.get('/get/:id', (req, res) => {
            this.emplController.getById(req, res);
        });
        this.router.get('/query', (req, res) => {
            this.emplController.getByPosition(req, res);
        });
        this.router.post('/', (req, res) => {
            this.emplController.create(req, res);
        });
        this.router.put('/position/:id', (req, res) => {
            this.emplController.updatePosition(req, res);
        });
        this.router.delete('/:id', (req, res) => {
            this.emplController.delete(req, res);
        });

    }
}