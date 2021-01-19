import { Request, Response } from 'express'
import insertStudent from "../data/insertStudent"

export const  createStudent = async(req: Request, res: Response): Promise <void> =>{

    try {
        await insertStudent(
            req.body.id,
            req.body.name,
            req.body.email,
            new Date(req.body.birthdate),
            req.body.mission_id
        );

        res.status(200).send("ESTUDANTE CRIADO COM SUCESSO!!!");
    } catch (error) {
        res.status(400).send(error.message);                
    }
};
