const express = require('express')
const router = express.Router()
const carController = require('../controllers/carController')


router.get('/car', carController.getAllCars)
router.get('/car/:id', carController.getCarById)
router.post('/car', carController.addCar)
router.put('/car/:id', carController.updateCar)
router.delete('/car/:id', carController.deleteCar)

module.exports = router