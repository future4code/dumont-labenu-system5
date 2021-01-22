import { Request, Response } from 'express'
import { selectStudentsByHobby } from '../data/selectStudentsByHobby';

export const getStudentsByHobby = async (req: Request, res: Response): Promise<any> => {
    try {
        const hobby = req.query.hobby as string;

        const students = await selectStudentsByHobby(hobby);

        res.status(200).send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
}