const modelsCar = require("../models/serialCar_models");

// Wajib
// API dapat menyimpan data
const addData = async (req, res) => {
  const { id_type } = req.body;
  const { name_car } = req.body;
  const { img_car } = req.body;
  const { kec_max } = req.body;
  const { hp } = req.body;
  const { price } = req.body;

  try {
    await modelsCar.addData(id_type, name_car, img_car, kec_max, hp, price);
    res.json({
      message: "Data Berhasil Disimpan",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// API dapat menampilkan seluruh data
const getAllCars = async (req, res) => {
  try {
    const [serialType] = await modelsCar.getAllCars();
    res.json({
      message: "Get Data Car berhasil ",
      serialType,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

//  API dapat menampilkan detail data.
const getDetailSerialCar = async (req, res) => {
  try {
    const { id_type } = req.params;
    const [basic_data] = await modelsCar.getDetailSerialCar(id_type);
    const [cars_list] = await modelsCar.getCarBySeri(id_type);

    res.json({
      message: "Get Detail Serial Type berhasil ",
      basic_data,
      cars_list,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

// API dapat mengubah data
const updateData = async (req, res) => {
  const { id_car } = req.params;
  const { id_type } = req.body;
  const { name_car } = req.body;
  const { img_car } = req.body;
  const { kec_max } = req.body;
  const { hp } = req.body;
  const { price } = req.body;
  try {
    await modelsCar.updateData(id_car, id_type, name_car, img_car, kec_max, hp, price)
    res.json({
      message: "Berhasil Update Data",
      id_car,
      id_type,
      name_car,
      img_car,
      kec_max,
      hp,
      price
    });
  } catch (error) {
    res.json({
      message: "server error",
      serverMessage: error,
    });
  }
};

const updateAvail = async (req, res) => {
  const { id_car } = req.params;
  const { isAvail } = req.body;
  
  try {
    await modelsCar.updateAvail(id_car, isAvail)
    res.json({
      message: "Berhasil Update Avail Data",
      id_car,
      isAvail
    });
  } catch (error) {
    res.json({
      message: "server error",
      serverMessage: error,
    });
  }
};
// API dapat menghapus data
const deleteCar = async (req, res) => {
  const id_car = req.params.id_car;

  try {
    await modelsCar.deleteCar(id_car);
    res.json({
      message: "Delete Car Berhasil",
      id_car,
    });
  } catch (error) {
    res.json({
      message: "server error",
      serverMessage: error,
    });
  }
};


// Bonus
// Search by name Car
const searchCarByName = async (req, res) => {
  try {
    const name_car = req.body.name_car
    const [car] = await modelsCar.searchByName(name_car)
    
    res.json({
      message: "Get Detail Serial Type berhasil ",
      name_car,
      car
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};
// menampilkan filter isAvail
const isAvail = async (req, res) => {
  try {
    const {isAvail} = req.params
    const [data] = await modelsCar.getCarByAvail(isAvail)
    res.json({
      message: "Get Data by availability success",
      data
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};



module.exports = {
  getAllCars,
  getDetailSerialCar,
  addData,
  updateData,
  updateAvail,
  deleteCar,
  searchCarByName,
  isAvail
};
