const express = require('express')
const app = express()
const serverError = require('./middlerware/serverError')

const rootRouter = require('./routes/index')

const CarUseCase = require('./usecase/carUseCase')
const BrandUseCase = require('./usecase/brandUseCase')
const CarRepo = require('./repository/carRepo')
const BrandRepo = require('./repository/brandRepo')

const carUC = new CarUseCase(new CarRepo())
const brandUC = new BrandUseCase(new BrandRepo())

app.use((req, res, next)=>{
    req.carUC = carUC
    req.brandUC = brandUC
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.json('halo prisma')
})

app.use('/api/v1', rootRouter)
app.use(serverError)

module.exports = app