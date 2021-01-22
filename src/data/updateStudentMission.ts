import { connection } from "../index"

export const updateStudentMission = async (missionId: number, studentId: number): Promise<any> => {
    await connection.raw(`
        UPDATE student
        SET mission_id = ${missionId}
        WHERE id = ${studentId};
    `);
};