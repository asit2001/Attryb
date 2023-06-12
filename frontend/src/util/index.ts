import axios from "axios";
import { Cars, Sort } from "../type";

interface RegisterUserProps {
  email: string;
  password: string;
  name: string;
}
export async function registerUser(data: RegisterUserProps) {
  try {
    let url = new URL(process.env.REACT_APP_URL!);
    url.pathname = "/api/user/signup";
    const res = await axios.post(url.href, data);
    return res.data;
  } catch (e: any) {
    throw new Error(e.response.data.error);
  }
}
export function sortCars(cars: Cars[], sort: Sort) {
  cars.sort((a, b) => {
    if (sort === "Mh2l") {
      return b.OEM_id.mileage - a.OEM_id.mileage;
    } else if (sort === "Ml2h") {
      return a.OEM_id.mileage - b.OEM_id.mileage;
    } else if (sort === "Ph2l") {
      return b.OEM_id.price - a.OEM_id.price;
    } else if (sort === "Pl2h") {
      return a.OEM_id.price - b.OEM_id.price;
    } else {
      if (
        sort.toLowerCase() === a.color.toLowerCase() &&
        sort.toLowerCase() !== b.color.toLowerCase()
      ) {
        return -1;
      } else if (
        sort.toLowerCase() !== a.color.toLowerCase() &&
        sort.toLowerCase() === b.color.toLowerCase()
      ) {
        return 1;
      }
      return 0;
    }
  });
  return cars;
}
