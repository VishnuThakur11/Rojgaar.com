import express, { response } from 'express';
import prisma from "./prisma.js";
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}))

const corsOption =   {
    "origin": "http://localhost:5173",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOption))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jobs', async (req, res) => {
    // res.send("jobs product pagezzzzzzzzz")
    try {
        const job = await prisma.job.findMany();
        if(job.length <= 0){
            return res.send("no job found")
        }
        // return job;
        return res.send(job)
    } catch (error) {
        console.log("job error found", error.message)
    }
    
});

app.post("/jobs/create" , async ( req, res ) => {
  const {title,description} = await req.body;
  console.log(title, description)
  const result = await prisma.job.create({data : {
    title,
    description
  }});
  console.log(result ," database found")
  res.send(result).status(201);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



