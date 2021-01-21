import { connection } from "../index"

export const selectStudentById = async ( id: number
    
): Promise<any> => {
    const result = await connection.raw(`
        SELECT name, FLOOR(DATEDIFF(CURDATE(), birthdate)/365) AS age
        FROM student
        WHERE id = "${id}";
    `);

    return result[0];
};