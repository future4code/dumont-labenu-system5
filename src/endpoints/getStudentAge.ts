import { Request, Response } from 'express'
import { selectStudentById } from '../data/selectStudentById'

export const getStudentAge = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = Number(req.params.id);
        const student = await selectStudentById(id);

        const currentDate = new Date(); 
        Math.abs(currentDate - student.birthdate); 

        console.log(student)

    } catch (error) {
        res.send(error.message)
    }

}