const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


class CarRepo {
    constructor() {
        this.CarModel = prisma.car
    }

    async getCars() {
        const cars = await this.CarModel.findMany()
        return cars
    }

    async getCarById(id) {
        const car = await this.CarModel.findUnique({
            where: { id }, 
            include: {
                brand:true
            }
        })
        return car
    }

    async addCar(data) {
        const car = await this.CarModel.create({ data: data })
        return car
    }

    async updateCar(data, id) {
        const car = await this.CarModel.update({
            data,
            where: { id }
        })

        return car
    }
    async deleteCar(id) {
        const car = await this.CarModel.delete({
            where: { id }
        })

        return car
    }

}

module.exports = CarRepo