class CarUseCase {
    constructor(carRepo) {
        this.carRepo = carRepo
    }

    async getAllCars() {
        let result = {
            isSuccess: true,
            statusCode: 200,
            data: null
        }
       const cars = await this.carRepo.getCars()
        result.data = cars
        return result
    }
}
module.exports = CarUseCase;