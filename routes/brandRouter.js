const express = require('express')
const router = express.Router()
const brandController = require('../controllers/brandController')


router.get('/brand', brandController.getAllBrands)
router.get('/brand/:id', brandController.getBrandById)
router.post('/brand', brandController.addBrand)
router.put('/brand/:id', brandController.updateBrand)
router.delete('/brand/:id', brandController.deleteBrand)

module.exports = router