import { Request, Response } from 'express'
import { insertTeacher } from '../data/insertTeacher'

export const createTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        await insertTeacher(
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.birthdate,
            req.body.mission_id
        );

        res.status(200).send(`Professor ${req.body.name} criado`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};