import { Request, Response } from 'express'
import { updateTeacherMission } from '../data/updateTeacherMission';

export const setTeacherMission = async (req: Request, res: Response): Promise<any> => {
    try {
        const missionId = Number(req.query.missionId);
        const teacherId = Number(req.query.teacherId);

        if (!missionId) {
            res.statusCode = 400
            throw new Error(`Preencha corretamente o "missionId"`)
        }

        if (!teacherId) {
            res.statusCode = 400
            throw new Error(`Preencha corretamente o "teacherId"`)
        }

        await updateTeacherMission(missionId, teacherId);

        res.status(200).send("Atualização feita");
    } catch (error) {
        res.status(400).send(error.message);
    }
}