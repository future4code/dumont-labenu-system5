import { connection } from "../index"

export const insertTeacher = async (
    id: number,
    name: string,
    email: string,
    dateOfBirth: Date,
    mission_id: number
): Promise<void> => {
    await connection.raw(`
        INSERT INTO teacher (id, name, email, birthdate, mission_id)
        VALUES (${id}, "${name}", "${email}", "${dateOfBirth}", ${mission_id});
    `)
};