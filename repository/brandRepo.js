const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Brand {
    constructor(){
        this.BrandModel = prisma 
    }

    async getBrands() {
        const brands = await this.BrandModel.brand.findMany()
        return brands
    }

    async getBrandById(){
        const brand = await this.BrandModel.brand.findUnique({
            where: { id }
        })
        return brands
    }

    async addBrand({data:data}) {
        const brand = await this.BrandModel.brand.create(data)
        return brand
    }

    async updateBrand(data , id) {
        const brand = await this.BrandModel.brand.update({
            data,
            where: { id }
        })
        return brand
    }

    async deleteBrand(id) {
        const brand = await this.BrandModel.brand.delete(id)
        return brand
    }
}