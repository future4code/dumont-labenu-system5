import { Request, Response } from 'express'
import { selectStudentAgeById } from '../data/selectStudentAgeById'

export const getStudentAgeById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = Number(req.params.id);

        const student = await selectStudentAgeById(id);

        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error.message);
    }
}