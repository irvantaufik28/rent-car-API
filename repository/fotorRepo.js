const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class FotoRepo {
    constructor() {
        this.fotoModel = prisma.foto
    }
    
    async addFoto(data) {
       const foto = await this.fotoModel.create({data:data})
       return foto
    }
}

module.exports = FotoRepo