const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class PhotoRepo {
    constructor() {
        this.photoModel = prisma.photo
    }
    
    async addFoto(data) {
       const photo = await this.photoModel.create({data:data})
       return photo
    }
}

module.exports = PhotoRepo