import { Request, Response } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: Function) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}