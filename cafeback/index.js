import express from 'express'

const PORT = 3000;

const app = express()

app.use(express.json())

app.post('/',(req,res)=>{

    res.status(200).json('server on')
})



app.listen(PORT,()=> console.log('SERVER START ON POR',PORT))
