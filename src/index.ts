import express, { raw, Request, Response } from 'express'
 import { AddressInfo } from 'net'
  import cors from 'cors' 
  import knex, { QueryBuilder } from 'knex' 
  import dotenv from 'dotenv' 
import { createStudent } from './endpoints/createStudent'
import {createMission} from "./endpoints/createMission"
  
  const app = express(); 
  
  app.use(express.json()); 
  
  app.use(cors()); 
  
  dotenv.config(); 
  
  export const connection = knex({ client: "mysql", connection: { 
    host: process.env.DB_HOST,    
    port: Number(process.env.DB_PORT || "3306"), 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_NAME 
  }});

  
    
//   endipont

app.post("/student/create", createStudent);
app.post("/mission/create", createMission);


   const server = app.listen(process.env.PORT || 3003, () => { 

       if (server) { const address = server.address() as AddressInfo; 

        console.log(`Server is running in http://localhost:${address.port}`);

    } else {
        console.error(`Failure upon starting server.`);
    }}); 