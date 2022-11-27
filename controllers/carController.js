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
    }
}