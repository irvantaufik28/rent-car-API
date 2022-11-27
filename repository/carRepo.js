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

}

module.exports = CarRepo