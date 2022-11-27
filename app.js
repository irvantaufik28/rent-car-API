const express = require('express')
const app = express()

const carRouter = require('./routes/carRoutes')
const CarUseCase = require('./usecase/carUseCase')
const CarRepo = require('./repository/carRepo')

const carUC = new CarUseCase(new CarRepo())

app.use((req, res, next)=>{
    req.carUC = carUC
    next()
})

app.use(express.json())
app.get('/', (req, res)=>{
    res.json('halo prisma')
})
app.use('/api/v1', carRouter)
app.listen(3000, ()=>{
    console.log('server runing port 3000')
})