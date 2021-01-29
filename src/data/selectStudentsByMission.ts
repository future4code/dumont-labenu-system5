import { connection } from "../index"

export const selectStudentsByMission = async (mission: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT student.name AS student, mission.name AS mission
        FROM student
        LEFT JOIN mission
        ON student.mission_id = mission.id
        WHERE mission.name = "${mission}";
    `);

    return result[0];
};