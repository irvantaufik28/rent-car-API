const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class BrandRepo {
    constructor(){
        this.BrandModel = prisma.brand
    }

    async getBrands() {
        const brands = await this.BrandModel.findMany({
            include: {
                car: true
            }
        })
        return brands
    }

    async getBrandById(id){
        const brand = await this.BrandModel.findUnique({
            where: { id }
        })
        return brand
    }

    async addBrand(data) {
        const brand = await this.BrandModel.create({data:data})
        return brand
    }

    async updateBrand(data , id) {
        const brand = await this.BrandModel.update({
            data,
            where: { id }
        })
        return brand
    }

    async deleteBrand(id) {
        const brand = await this.BrandModel.delete({
            where: { id }
        })
        return brand
    }
}

module.exports = BrandRepo;