const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


class CarRepo {
    constructor() {
        this.CarModel = prisma
    }

    async getCars() {
        const cars = await this.CarModel.car.findMany()
        return cars
    }

    async getCarById(id) {
        const car = await this.CarModel.car.findUnique({
            where: { id }
        })
        return car
    }

    async addCar(data) {
        const car = await this.CarModel.car.create({ data: data })
        return car
    }

    async updateCar(data, id) {
        const car = await this.CarModel.car.update({
            data,
            where: { id }
        })

        return car
    }
    async deleteCar(id) {
        const car = await this.CarModel.car.delete({
            where: { id }
        })

        return car
    }

}

module.exports = CarRepo