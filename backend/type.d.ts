import { ObjectId } from "mongoose";

export interface UserSchema{
    name: string,
    email:string,
    password:string,
    cars:[ObjectId]
}
export interface OEMSpecsType{
    OEMname:string;
    modelName: string;
    year:number;
    price:number;
    colors:[string];
    mileage:number;
    power:number;
    maxSpeed:number;
}
export interface MarketplaceInventoryType{
    OEM_id:ObjectId
    KMs:number;
    majorScratches:boolean;
    originalPaint:boolean;
    numberOfAccidents:number;
    numberOfPreviousBuyers:number;
    registrationPlace:string;
    carImage:string;
    color:string;
}