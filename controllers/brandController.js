const resData = require('../helper/response')

module.exports = {
    getAllBrands: async (req, res, next) => {
        try {
            const car = await req.brandUC.getAllBrands()
            if (!car.isSuccess) {
                return res.status(car.statusCode).json(resData.failed)
            }
            return res.status(car.statusCode).json(resData.success)

        } catch (error) {
            next(error)
        }
    },
    getBrandById: async (req, res, next) => {
        try {
            const { id } = req.params
            const car = await req.brandUC.getBrandById(parseInt(id))
            if (!car.isSuccess) {
                return res.status(car.statusCode).json(resData.failed)
            }
            return res.status(car.statusCode).json(resData.success)

        } catch (error) {
            next(error)
        }
    },

    addBrand: async (req, res, next) => {
        try {
            const data = {
                name: req.body.name
            }
            const car = await req.brandUC.addBrand(data)
            if (!car.isSuccess) {
                return res.status(car.statusCode).json(resData.failed)
            }
            return res.status(car.statusCode).json(resData.success)

        } catch (error) {
            next(error)
        }
    },
    updateBrand: async (req, res, next) => {
        try {
            const { id } = req.params
            const data = {
                name: req.body.name,
            }
            const car = await req.brandUC.updateBrand(data, parseInt(id))
            if (!car.isSuccess) {
                return res.status(car.statusCode).json(resData.failed)
            }
            return res.status(car.statusCode).json(resData.success)

        } catch (error) {
            next(error)
        }
    },
    deleteBrand: async (req, res, next) => {
        try {
            const { id } = req.params
            const car = await req.brandUC.deleteBrand(parseInt(id))
            if (!car.isSuccess) {
                return res.status(car.statusCode).json(resData.failed)
            }
            return res.status(car.statusCode).json(res.success)

        } catch (error) {
            next(error)
        }
    }
}