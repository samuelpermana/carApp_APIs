const express = require('express');
const router = express.Router()
const ctrl = require('../controllers/serialCar_ctrl')



router.get('/', ctrl.getAllCars) 
router.post('/', ctrl.addData)
router.get('/search', ctrl.searchCarByName)
router.get('/isAvail/:isAvail', ctrl.isAvail)
router.patch('/isAvail/:id_car', ctrl.updateAvail)
router.get('/:id_type', ctrl.getDetailSerialCar) 
router.patch('/:id_car', ctrl.updateData)
router.delete('/:id_car', ctrl.deleteCar)




module.exports = router