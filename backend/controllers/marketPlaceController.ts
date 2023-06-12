import { Request, Response } from "express";
import MarketplaceInventoryModel from "../model/MarketplaceInventoryModel";
import OEMSpecsModel from "../model/OEMSpecsModel";

export async function addCar(req: Request, res: Response) {
  try {
    const body = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "image file is required" });
    }
    const data = {
      OEM_id: body.OEM_id,
      KMs: parseInt(body.KMs),
      majorScratches: body.majorScratches === "true",
      numberOfAccidents: parseInt(body.numberOfAccidents),
      numberOfPreviousBuyers: parseInt(body.numberOfPreviousBuyers),
      originalPaint: body.originalPaint === "true",
      registrationPlace: body.registrationPlace,
      color:body.color
    };
    console.log(req.body);
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (!body[keys[i]]) {
        return res.status(400).json({ message: `${keys[i]} is required` });
      }
    }
    await MarketplaceInventoryModel.create({
      ...body,
      carImage: req.file.path.replace("public", ""),
    });
    res.json(
      await MarketplaceInventoryModel.find().populate({
        path: "OEM_id",
        model: OEMSpecsModel,
      })
    );
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

export async function getCars(req: Request, res: Response) {
  try {
    const data = await MarketplaceInventoryModel.find().populate({
      path: "OEM_id",
      model: OEMSpecsModel,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function deleteCar(req: Request, res: Response) {
  try {
    const id = req.body.id;
    console.log(req.body);
    if (!id) {
      return res.status(400).json({ message: "id is required" });
    }
    await MarketplaceInventoryModel.deleteOne({ _id: id });
    res.send();
  } catch (error) {
    console.log(req.query);

    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
export async function updateCar(req: Request, res: Response) {
  try {
    const body = req.body;
    console.log(body);
    
    if (!body.id) {
      return res.status(400).json({ message: "id is required" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "image file is required" });
    }
    const data = {
      KMs: parseInt(body.KMs),
      majorScratches: body.majorScratches === "true",
      numberOfAccidents: parseInt(body.numberOfAccidents),
      numberOfPreviousBuyers: parseInt(body.numberOfPreviousBuyers),
      originalPaint: body.originalPaint === "true",
      registrationPlace: body.registrationPlace,
      color:body.color
    };
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (!body[keys[i]]) {
        return res.status(400).json({ message: `${keys[i]} is required` });
      }
    }

    res.json(
      await MarketplaceInventoryModel.findByIdAndUpdate(body.id,{...data,carImage: req.file.path.replace("public", "")},{
        new:true
      }).populate({
        path: "OEM_id",
        model: OEMSpecsModel,
      })
    );
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
