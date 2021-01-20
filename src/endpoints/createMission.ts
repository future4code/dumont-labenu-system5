import { Request, Response } from 'express'
import { insertMission } from '../data/insertMission'

export const createMission = async (req: Request, res: Response): Promise<void> => {
    try {
        if (req.body.module < 1 || req.body.module > 7) {
            res.statusCode = 422
            throw new Error(`"module" deve ser entre 1 e 7`)
        }

        await insertMission(
            req.body.id,
            req.body.name,
            req.body.start_date,
            req.body.end_date,
            req.body.module
        );

        res.status(200).send(`Turma ${req.body.name} criada`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};