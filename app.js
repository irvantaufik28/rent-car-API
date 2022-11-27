const express = require('express')
const app = express()

const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const serverError = require('./middlerware/serverError')

const rootRouter = require('./routes/index')

const CarUseCase = require('./usecase/carUseCase')
const BrandUseCase = require('./usecase/brandUseCase')
const FotoUseCase = require('./usecase/fotoUseCase')

const CarRepo = require('./repository/carRepo')
const BrandRepo = require('./repository/brandRepo')
const FotoRepo = require('./repository/fotorRepo')

const carUC = new CarUseCase(new CarRepo())
const brandUC = new BrandUseCase(new BrandRepo())
const fotoUC = new FotoUseCase(new FotoRepo(), sharp, path, fs)

app.use((req, res, next)=>{
    req.carUC = carUC
    req.brandUC = brandUC
    req.fotoUC = fotoUC
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.json('halo prisma')
})

app.use('/api/v1', rootRouter)
app.use("uploads", express.static("public/uploads"));
app.use(serverError)

module.exports = app