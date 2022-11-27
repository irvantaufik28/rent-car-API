module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const car = await req.carUC.getAllCars()
            if (!car.isSuccess) {
                return res.status(car.statusCode).json({
                    status: 'failed',
                    reason: car.reason
                })
            }
            return res.status(car.statusCode).json({
                status: 'success',
                data: car.data,
            })

        } catch (error) {
            next(error)
        }
    },
    getCarById: async (req, res, next) => {
        try {
            const { id } = req.params
            const car = await req.carUC.getCarById(parseInt(id))
            if (!car.isSuccess) {
                return res.status(car.statusCode).json({
                    status: 'failed',
                    reason: car.reason
                })
            }
            return res.status(car.statusCode).json({
                status: 'success',
                data: car.data,
            })

        } catch (error) {
            next(error)
        }
    },

    addCar: async (req, res, next) => {
        try {
            const data = {
                name: req.body.name,
                brand: req.body.brand,
                type: req.body.type,
                price: req.body.price,
                fotoId: req.body.fotoId
            }        
            const car = await req.carUC.addCar(data)
            if (!car.isSuccess) {
                return res.status(car.statusCode).json({
                    status: 'failed',
                    reason: car.reason
                })
            }
            return res.status(car.statusCode).json({
                status: 'success',
                data: car.data,
            })

        } catch (error) {
            next(error)
        }
    },
    updateCar: async (req, res, next) => {
        try {
            const { id } = req.params
            const data = {
                name: req.body.name,
                brand: req.body.brand,
                type: req.body.type,
                price: req.body.price,
                fotoId: req.body.fotoId
            }        
            const car = await req.carUC.updateCar( data, parseInt(id))
            if (!car.isSuccess) {
                return res.status(car.statusCode).json({
                    status: 'failed',
                    reason: car.reason
                })
            }
            return res.status(car.statusCode).json({
                status: 'success update'
            })

        } catch (error) {
            next(error)
        }
    },
    deleteCar: async (req, res, next) => {
        try {
            const { id } = req.params      
            const car = await req.carUC.deleteCar(parseInt(id))
            if (!car.isSuccess) {
                return res.status(car.statusCode).json({
                    status: 'failed',
                    reason: car.reason
                })
            }
            return res.status(car.statusCode).json({
                status: 'success delete'
            })

        } catch (error) {
            next(error)
        }
    }
}