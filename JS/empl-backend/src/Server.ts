import express from "express";
import { EmplRoutes } from "./routes/EmplRoutes";

export class Server {

    private app = express();

    private routes = new EmplRoutes(this.app);

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