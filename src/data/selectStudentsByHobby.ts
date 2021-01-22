import { connection } from "../index"

export const selectStudentsByHobby = async (hobby: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT student.name AS student, hobby.name AS hobby
        FROM student
        JOIN student_hobby ON student_id = student.id
        JOIN hobby ON hobby_id = hobby.id
        WHERE hobby.name = "${hobby}";
    `);

    return result[0];
};