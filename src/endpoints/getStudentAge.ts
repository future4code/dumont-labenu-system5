import { Request, Response } from 'express'
import { selectStudentById } from '../data/selectStudentById'

export const getStudentAge = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = Number(req.params.id);

        const student = await selectStudentById(id);

        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error.message);
    }

}