import { Schema, model } from "mongoose";
import { MarketplaceInventoryType } from "../type";

const MarketplaceInventorySchema = new Schema<MarketplaceInventoryType>({
  OEM_id: {
    type: Schema.Types.ObjectId,
    ref: "OEM_Specs",
    required:true
  },
  KMs: {
    type: Number,
    required: true,
  },
  majorScratches: {
    type: Boolean,
    required: true,
  },
  numberOfAccidents: {
    type: Number,
    required: true,
  },
  numberOfPreviousBuyers: {
    type: Number,
    required: true,
  },
  originalPaint: {
    type: Boolean,
    required: true,
  },
  registrationPlace: {
    type: String,
    required: true,
  },
  carImage: {
    type: String,
    required: true,
  },
  color:{
    type:String,
    required:true
  }
});
const MarketplaceInventoryModel = model(
  "marketplace_inventory",
  MarketplaceInventorySchema
);
export default MarketplaceInventoryModel;
