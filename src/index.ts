import express from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import knex from 'knex'
import dotenv from 'dotenv'
import { createStudent } from './endpoints/createStudent'
import { createMission } from './endpoints/createMission'
import { createTeacher } from './endpoints/createTeacher'
import { getStudentAgeById } from './endpoints/getStudentAgeById'
import { getStudentsByMission } from './endpoints/getStudentsByMission'
import { getStudentsByHobby } from './endpoints/getStudentsByHobby'
import { setStudentMission } from './endpoints/setStudentMission'
import { setTeacherMission } from './endpoints/setTeacherMission'

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

// Endpoints das funcionalidades básicas
app.post("/mission/create", createMission);
app.post("/student/create", createStudent);
app.post("/teacher/create", createTeacher);
app.post("/student/change", setStudentMission);
app.post("/teacher/change", setTeacherMission);
app.get("/student/:id", getStudentAgeById);

// Endpoints dos desafios
app.get("/students/mission", getStudentsByMission);

app.get("/students/hobby", getStudentsByHobby);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
}); 