import { Request, Response } from 'express'
import { updateStudentMission } from '../data/updateStudentMission';

export const setStudentMission = async (req: Request, res: Response): Promise<any> => {
    try {
        const missionId = Number(req.query.missionId);
        const studentId = Number(req.query.studentId);

        if (!missionId) {
            res.statusCode = 400
            throw new Error(`Preencha corretamente o "missionId"`)
        }

        if (!studentId) {
            res.statusCode = 400
            throw new Error(`Preencha corretamente o "studentId"`)
        }

        await updateStudentMission(missionId, studentId);

        res.status(200).send("Atualização feita");
    } catch (error) {
        res.status(400).send(error.message);
    }
}