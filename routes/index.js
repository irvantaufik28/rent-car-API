const expess = require('express')
const rootRouter = expess.Router()

const car = require('./carRoutes')
const brand = require('./brandRouter')

rootRouter.use('/car', car)
rootRouter.use('/brand', brand)


module.exports = rootRouter;