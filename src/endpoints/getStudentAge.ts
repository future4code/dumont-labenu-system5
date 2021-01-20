import { Request, Response } from 'express'
import { selectStudentById } from '../data/selectStudentById'

function calculaIdade(dataNasc: string ){ 
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoNascParts = dataNasc.split('-');
    const diaNasc =anoNascParts[0];
    const mesNasc =anoNascParts[1];
    const anoNasc =anoNascParts[2];
    let idade = anoAtual - anoNasc;


    const mesAtual = dataAtual.getMonth() + 1; 
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
    if(mesAtual < mesNasc){
    idade--; 
    } else {
    //Se estiver no mes do nascimento, verificar o dia
    if(mesAtual == mesNasc){ 
    if(new Date().getDate() < diaNasc ){ 
    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
    idade--; 
    }
    }
    } 
    return idade; 
   }
   console.log(calculaIdade('31/12/1970'));

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

