import { connection } from "../index"

export const updateTeacherMission = async (missionId: number, teacherId: number): Promise<any> => {
    await connection.raw(`
        UPDATE teacher
        SET mission_id = ${missionId}
        WHERE id = ${teacherId};
    `);
};