import {connection} from "../index"

export default async function insertMission (
    id: number,
    name: string,
    start_date: Date,
    end_date:Date,
    module: number,
    ): Promise <void> {
        await connection.raw(`
            INSERT INTO student VALUES (
                ${id},
                "${name}" ,
                "${start_date}",
                "${end_date}",
                ${module},
            );
        `);
};