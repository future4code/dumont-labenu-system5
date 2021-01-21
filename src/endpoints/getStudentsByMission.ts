import { Request, Response } from 'express'
import { selectStudentsByMission } from '../data/selectStudentsByMission';

export const getStudentsByMission = async (req: Request, res: Response): Promise<any> => {
    try {
        const mission = req.params.mission;

        const students = await selectStudentsByMission(mission);

        res.status(200).send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
}