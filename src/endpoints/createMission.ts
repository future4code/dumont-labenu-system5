import { Request, Response } from 'express'
import insertMission from "../data/insertMission"

export const  createMission = async(req: Request, res: Response): Promise <void> =>{

    try {
        await insertMission(
            req.body.id,
            req.body.name,
            new Date(req.body.start_date),
            new Date(req.body.end_date),
            req.body.module
        );

        res.status(200).send("TURMA CRIADO COM SUCESSO!!!");
    } catch (error) {
        res.status(400).send(error.message);                
    }
};