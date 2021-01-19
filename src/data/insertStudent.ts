import {connection} from "../index"

export default async function insertStudent (
    id: number,
    name: string,
    email: string ,
    birthdate: Date,
    mission_id: number,
    ): Promise <void> {
        await connection.raw(`
            INSERT INTO student VALUES (
                ${id},
                "${name}" ,
                "${email}",
                "${birthdate}",
                ${mission_id},
            );
        `);
};