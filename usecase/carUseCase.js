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
    
    async getCarById(id) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            data: null
        }
        
       const car = await this.carRepo.getCarById(id)
       if (car === null) {
        result.reason = 'car not found!'
        return result
       }
       result.isSuccess = true;
       result.statusCode = 200;
       result.data = car;
       return result
        
    }

    async addCar(id) {
        let result = {
            isSuccess: true,
            statusCode: 200,
            reason: null,
            data: null
        }
       const car = await this.carRepo.addCar(id)
       result.data = car;
       return result
        
    }
    async updateCar(data, id) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }
        const verfyCar = await this.carRepo.getCarById(id) 
        if (verfyCar === null) {
            result.reason = 'car not found'
            return result
        }
         await this.carRepo.updateCar(data, id)
         result.isSuccess = true
         result.statusCode = 200
         return result
        
    }

    async deleteCar(id) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }
        const verfyCar = await this.carRepo.getCarById(id) 
        if (verfyCar === null) {
            result.reason = 'car not found'
            return result
        }
         await this.carRepo.deleteCar(id)
         result.isSuccess = true
         result.statusCode = 200
         return result
        
    }
}
module.exports = CarUseCase;