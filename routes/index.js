const expess = require('express')
const rootRouter = expess.Router()

const car = require('./carRoutes')
const brand = require('./brandRouter')
const media = require('./photoRoutes')

rootRouter.use('/car', car)
rootRouter.use('/brand', brand)
rootRouter.use('/', media)


module.exports = rootRouter;