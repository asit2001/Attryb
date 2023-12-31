import OEMSpecsModel from "../model/OEMSpecsModel";
import con from "../src/connect";
const data = [
  {
    OEMname: "Honda",
    modelName: "City",
    year: 2015,
    price: 800000,
    colors: ["White", "Black", "Silver", "Red"],
    mileage: 18,
    power: 118,
    maxSpeed: 190,
  },
  {
    OEMname: "Honda",
    modelName: "Civic",
    year: 2021,
    price: 1200000,
    colors: ["White", "Black", "Silver", "Red", "Blue"],
    mileage: 25,
    power: 174,
    maxSpeed: 140,
  },
  {
    OEMname: "Honda",
    modelName: "CR-V",
    year: 2023,
    price: 1500000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 20,
    power: 190,
    maxSpeed: 200,
  },
  {
    OEMname: "Honda",
    modelName: "Jazz",
    year: 2022,
    price: 900000,
    colors: ["White", "Black", "Silver", "Red"],
    mileage: 21,
    power: 89,
    maxSpeed: 160,
  },
  {
    OEMname: "Honda",
    modelName: "HR-V",
    year: 2023,
    price: 1100000,
    colors: ["White", "Black", "Silver", "Grey"],
    mileage: 23,
    power: 141,
    maxSpeed: 180,
  },
  {
    OEMname: "Honda",
    modelName: "Pilot",
    year: 2022,
    price: 1800000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 17,
    power: 280,
    maxSpeed: 200,
  },
  {
    OEMname: "Maruti",
    modelName: "Swift",
    year: 2022,
    price: 600000,
    colors: ["White", "Grey", "Silver", "Blue"],
    mileage: 23,
    power: 82,
    maxSpeed: 165,
  },
  {
    OEMname: "Maruti",
    modelName: "Baleno",
    year: 2023,
    price: 750000,
    colors: ["White", "Silver", "Red", "Grey"],
    mileage: 21,
    power: 89,
    maxSpeed: 160,
  },
  {
    OEMname: "Maruti",
    modelName: "Ertiga",
    year: 2023,
    price: 950000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 19,
    power: 103,
    maxSpeed: 180,
  },
  {
    OEMname: "Maruti",
    modelName: "Wagon R",
    year: 2022,
    price: 550000,
    colors: ["White", "Silver", "Red", "Blue"],
    mileage: 20,
    power: 67,
    maxSpeed: 150,
  },
  {
    OEMname: "Maruti",
    modelName: "Ciaz",
    year: 2022,
    price: 850000,
    colors: ["White", "Black", "Silver", "Grey"],
    mileage: 20,
    power: 103,
    maxSpeed: 180,
  },
  {
    OEMname: "Maruti",
    modelName: "S-Presso",
    year: 2023,
    price: 500000,
    colors: ["White", "Silver", "Red", "Orange"],
    mileage: 21,
    power: 67,
    maxSpeed: 140,
  },
  {
    OEMname: "Maruti",
    modelName: "Vitara Brezza",
    year: 2022,
    price: 900000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 18,
    power: 103,
    maxSpeed: 180,
  },
  {
    OEMname: "BMW",
    modelName: "X5",
    year: 2020,
    price: 1000000,
    colors: ["Black", "White", "Silver", "Blue"],
    mileage: 20,
    power: 335,
    maxSpeed: 250,
  },
  {
    OEMname: "BMW",
    modelName: "3 Series",
    year: 2022,
    price: 900000,
    colors: ["Black", "White", "Silver", "Blue"],
    mileage: 23,
    power: 255,
    maxSpeed: 155,
  },
  {
    OEMname: "BMW",
    modelName: "X3",
    year: 2023,
    price: 1100000,
    colors: ["Black", "White", "Silver", "Grey"],
    mileage: 22,
    power: 248,
    maxSpeed: 155,
  },
  {
    OEMname: "BMW",
    modelName: "7 Series",
    year: 2022,
    price: 1800000,
    colors: ["Black", "White", "Silver", "Blue"],
    mileage: 19,
    power: 335,
    maxSpeed: 250,
  },
  {
    OEMname: "BMW",
    modelName: "X1",
    year: 2023,
    price: 950000,
    colors: ["Black", "White", "Silver", "Grey"],
    mileage: 20,
    power: 228,
    maxSpeed: 205,
  },
  {
    OEMname: "Audi",
    modelName: "A4",
    year: 2019,
    price: 900000,
    colors: ["Black", "Grey", "White", "Red"],
    mileage: 25,
    power: 248,
    maxSpeed: 155,
  },
  {
    OEMname: "Audi",
    modelName: "Q5",
    year: 2020,
    price: 1100000,
    colors: ["Black", "Grey", "White", "Red"],
    mileage: 22,
    power: 248,
    maxSpeed: 155,
  },
  {
    OEMname: "Audi",
    modelName: "A6",
    year: 2022,
    price: 1300000,
    colors: ["Black", "Grey", "White", "Blue"],
    mileage: 23,
    power: 335,
    maxSpeed: 155,
  },
  {
    OEMname: "Audi",
    modelName: "Q7",
    year: 2023,
    price: 1600000,
    colors: ["Black", "Grey", "White", "Silver"],
    mileage: 21,
    power: 335,
    maxSpeed: 155,
  },
  {
    OEMname: "Audi",
    modelName: "A3",
    year: 2022,
    price: 1000000,
    colors: ["Black", "Grey", "White", "Red"],
    mileage: 25,
    power: 184,
    maxSpeed: 155,
  },
  {
    OEMname: "Ford",
    modelName: "Mustang",
    year: 2023,
    price: 1500000,
    colors: ["Black", "White", "Red", "Blue"],
    mileage: 15,
    power: 450,
    maxSpeed: 250,
  },
  {
    OEMname: "Ford",
    modelName: "Focus",
    year: 2022,
    price: 800000,
    colors: ["White", "Black", "Silver", "Grey"],
    mileage: 20,
    power: 123,
    maxSpeed: 170,
  },
  {
    OEMname: "Ford",
    modelName: "Escape",
    year: 2022,
    price: 900000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 22,
    power: 181,
    maxSpeed: 200,
  },
  {
    OEMname: "Ford",
    modelName: "Explorer",
    year: 2023,
    price: 1200000,
    colors: ["Black", "White", "Silver", "Red"],
    mileage: 18,
    power: 300,
    maxSpeed: 220,
  },
  {
    OEMname: "Ford",
    modelName: "Fusion",
    year: 2022,
    price: 850000,
    colors: ["White", "Black", "Silver", "Grey"],
    mileage: 21,
    power: 175,
    maxSpeed: 200,
  },
  {
    OEMname: "Toyota",
    modelName: "Camry",
    year: 2023,
    price: 1300000,
    colors: ["White", "Black", "Silver", "Red"],
    mileage: 28,
    power: 203,
    maxSpeed: 140,
  },
  {
    OEMname: "Toyota",
    modelName: "Corolla",
    year: 2022,
    price: 1000000,
    colors: ["White", "Black", "Silver", "Grey"],
    mileage: 25,
    power: 139,
    maxSpeed: 120,
  },
  {
    OEMname: "Toyota",
    modelName: "RAV4",
    year: 2022,
    price: 1100000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 24,
    power: 203,
    maxSpeed: 130,
  },
  {
    OEMname: "Toyota",
    modelName: "Highlander",
    year: 2023,
    price: 1500000,
    colors: ["White", "Black", "Silver", "Red"],
    mileage: 22,
    power: 295,
    maxSpeed: 155,
  },
  {
    OEMname: "Toyota",
    modelName: "Prius",
    year: 2022,
    price: 900000,
    colors: ["White", "Black", "Silver", "Blue"],
    mileage: 50,
    power: 121,
    maxSpeed: 112,
  },
];

export async function insertDummyData() {
  try {
    await OEMSpecsModel.deleteMany({});
    await OEMSpecsModel.insertMany(data);
    console.log("insert successfully");
  } catch (e) {
    console.log(e.message);
  }
}
