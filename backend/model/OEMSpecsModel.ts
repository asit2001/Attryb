import { Schema, model } from "mongoose";
import { OEMSpecsType } from "../type";
const OEMSpecsSchema = new Schema<OEMSpecsType>({
  OEMname: {
    required: true,
    type: String,
  },
  modelName: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: Number,
  },
  price: {
    required: true,
    type: Number,
  },
  colors: [
    {
      required: true,
      type: String,
    },
  ],
  maxSpeed: {
    required: true,
    type: Number,
  },
  mileage: {
    required: true,
    type: Number,
  },
  power: {
    required: true,
    type: Number,
  },
});

OEMSpecsSchema.index({"OEMname":"text","modelName":"text","year":"text"},{weights:{
    "OEMname":100,
    "modelName":1000,
    "year":10
}})

const OEMSpecsModel = model("OEM_Specs", OEMSpecsSchema);
export default OEMSpecsModel