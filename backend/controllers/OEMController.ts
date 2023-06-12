import { Request, Response } from "express";
import OEMSpecsModel from "../model/OEMSpecsModel";
import { OEMSpecsType } from "../type";

export async function getOMEs(req: Request, res: Response) {
  try {
    const query = req.query.q;
    console.log(req.query);
    if (!query) {
      return res.json(await OEMSpecsModel.find());
    }

    const data = await OEMSpecsModel.find({
      $text: { $search: query as string },
    }).sort({ score: { $meta: "textScore" } });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function addOME(req: Request, res: Response) {
  try {
    const body = req.body as OEMSpecsType;
    const data = {
      colors: body.colors,
      maxSpeed: body.maxSpeed,
      mileage: body.mileage,
      modelName: body.modelName,
      OEMname: body.OEMname,
      power: body.power,
      price: body.price,
      year: body.year,
    };
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      if (!body[keys[i]]) {
        return res.status(400).json({ message: `${keys[i]} is required` });
      }
    }
    let oem = await OEMSpecsModel.create(data);
    res.status(201).json(oem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function countOEM(req: Request, res: Response) {
  try {
    const count = await OEMSpecsModel.aggregate([
      {
        $group: {
          _id: "$OEMname",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(count);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}
