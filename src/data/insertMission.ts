import { connection } from "../index"

export const insertMission = async (
    id: number,
    name: string,
    dateOfStart: Date,
    dateOfEnd: Date,
    module: number
): Promise<void> => {
    await connection.raw(`
        INSERT INTO mission (id, name, start_date, end_date, module)
        VALUES (${id}, "${name}", "${dateOfStart}", "${dateOfEnd}", ${module});
    `)
};