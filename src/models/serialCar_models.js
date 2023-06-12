const dbPool = require('../config/config')

const addData =(id_type,name_car,img_car,kec_max,hp,price) => {
    const SQLQuery = `INSERT INTO car (id_type, name_car, img_car,kec_max,hp,price) VALUES (${id_type}, "${name_car}", "${img_car}",${kec_max},${hp},"${price}")`
    return dbPool.execute(SQLQuery)
}


const getAllCars = () =>{
    const SQLQuery = 'SELECT * FROM car' 
    return dbPool.execute(SQLQuery)
}
const getDetailSerialCar = (id_type) =>{
    const SQLQuery =`SELECT * FROM serial_type WHERE id_type=${id_type}`
    return dbPool.execute(SQLQuery) 
}
const getCarBySeri = (id_type)=>{
    const SQLQuery = `SELECT * FROM car WHERE id_type=${id_type}`
    return dbPool.execute(SQLQuery)
}

const getCarByAvail = (isAvail)=>{
    const SQLQuery = `SELECT * FROM car WHERE isAvail=${isAvail}`
    return dbPool.execute(SQLQuery)
}

const updateData = (id_car,id_type,name_car,img_car,kec_max,hp,price) =>{
    const SQLQuery =`UPDATE car SET id_type =${id_type}, name_car ='${name_car}', img_car ='${img_car}', kec_max=${kec_max}, hp=${hp}, price='${price}' WHERE id_car = ${id_car}`
    return dbPool.execute(SQLQuery)
}

const updateAvail = (id_car,isAvail) =>{
    const SQLQuery =`UPDATE car SET isAvail =${isAvail} WHERE id_car = ${id_car}`
    return dbPool.execute(SQLQuery)
}

const deleteCar = (id_car) =>{
    const SQLQuery =`DELETE FROM car WHERE id_car = ${id_car}`
    return dbPool.execute(SQLQuery)
}

const searchByName = (name_car) =>{
    const SQLQuery =`SELECT * FROM car WHERE name_car LIKE '%${name_car}%'`
    return dbPool.execute(SQLQuery)
}






module.exports = {
    getAllCars,
    getDetailSerialCar,
    getCarBySeri,
    addData,
    updateData,
    updateAvail,
    deleteCar,
    searchByName,
    getCarByAvail
}
