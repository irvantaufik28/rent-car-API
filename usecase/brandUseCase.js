class BrandUseCase {
    constructor(brandRepo) {
        this.brandRepo = brandRepo
    }

    async getAllBrand() {
        let result = {
            isSuccess: true,
            statusCode: 200,
            data: null
        }
       const cars = await this.brandRepo.getBrands()
        result.data = cars
        return result
    }
    
    async getBrandById(id) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            data: null
        }
        
       const car = await this.brandRepo.getBrandById(id)
       if (car === null) {
        result.reason = 'car not found!'
        return result
       }
       result.isSuccess = true;
       result.statusCode = 200;
       result.data = car;
       return result
        
    }

    async addBrand(id) {
        let result = {
            isSuccess: true,
            statusCode: 200,
            reason: null,
            data: null
        }
       const car = await this.brandRepo.addBrand(id)
       result.data = car;
       return result
        
    }
    async updateBrand(data, id) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }
        const verfyCar = await this.brandRepo.getBrandById(id) 
        if (verfyCar === null) {
            result.reason = 'car not found'
            return result
        }
         await this.brandRepo.updateBrand(data, id)
         result.isSuccess = true
         result.statusCode = 200
         return result
        
    }

    async deleteBrand(id) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null
        }
        const verfyCar = await this.brandRepo.getBrandById(id) 
        if (verfyCar === null) {
            result.reason = 'car not found'
            return result
        }
         await this.brandRepo.deleteBrand(id)
         result.isSuccess = true
         result.statusCode = 200
         return result
        
    }
}
module.exports = BrandUseCase;