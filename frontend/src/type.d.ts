export interface OEMSpecsType {
  _id: string;
  OEMname: string;
  modelName: string;
  year: number;
  price: number;
  colors: [string];
  mileage: number;
  power: number;
  maxSpeed: number;
}
export interface SellerCarDetails {
  KMs: number;
  majorScratches: boolean;
  originalPaint: boolean;
  numberOfAccidents: number;
  numberOfPreviousBuyers: number;
  registrationPlace: string;
  color:string
}
export interface Cars extends SellerCarDetails{
    _id:string,
    carImage:string,
    OEM_id:OEMSpecsType
}
export type Sort = "Ml2h"|"Mh2l" | "Pl2h"|"Ph2l" |"red" |"blue" |"silver"|"black"