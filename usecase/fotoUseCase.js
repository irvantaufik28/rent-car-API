class FotoUseCase {
    constructor(fotoRepo, sharp, path, fs) {
        this.fotoRepo = fotoRepo;
        this.sharp = sharp;
        this.path = path;
        this.fs = fs;
    }

    async upload(file) {
        let result = {
            isSuccess: false,
            statusCode: 404,
            reason: null,
            data: null,
        };

        const originalFileName = file.filename
        const metadata = await this.sharp(file.path).metadata()
        const fileType = metadata.format;

        const randomString = (Math.random() * (100000 - 1) + 1).toString(36).substring(7)

        const smallFileName = randomString + '.' + fileType;
        const smallDestinationPath = this.path.resolve(file.destination, '', smallFileName)
        const largeFileName = randomString + '.' + fileType;
        const largeDestionationPath = this.path.resolve(file.destination, '', largeFileName)

        await this.sharp(file.path).resize(500).jpeg({quality: 90}).toFile(smallDestinationPath)
        await this.sharp(file.path).resize(1000).jpeg({quality: 90}).toFile(largeDestionationPath)

        this.fs.unlinkSync(file.path)

        const createData = {
            small: smallFileName,
            large: largeFileName,
            original: originalFileName,
            mimeType:fileType,
        }

        const data = await this.fotoRepo.addFoto(createData)

        result.isSuccess = true;
        result.statusCode = 200;
        result.data = data;
        return result
    }


}

module.exports = FotoUseCase;