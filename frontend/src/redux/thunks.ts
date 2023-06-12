import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADD_CAR_THUNKS,
  CAR_THUNKS,
  DELETE_CAR_THUNKS,
  GET_CAR_THUNKS,
  UPDATE_CAR_THUNKS,
  USER_LOGIN_THUNK,
} from ".";
import { Cars, OEMSpecsType, SellerCarDetails } from "../type";

const api_uri = process.env.REACT_APP_URL as string;
axios.defaults.withCredentials=true;

export const omeThunks = createAsyncThunk(
  CAR_THUNKS,
  async ({ search }: { search: string }) => {
    const url = new URL(api_uri);
    url.pathname = "/api/oem";
    url.searchParams.set("q", search);
    const response = await axios.get(url.href);
    return response.data as OEMSpecsType[];
  }
);
export const getCarsThunks = createAsyncThunk(GET_CAR_THUNKS, async () => {
  const url = new URL(api_uri);
  url.pathname = "/api/cars";
  const response = await axios.get(url.href);

  return response.data as Cars[];
});

export const addCar = createAsyncThunk(
  ADD_CAR_THUNKS,
  async ({
    OEM_id,
    details,
    file,
  }: {
    OEM_id: string;
    details: SellerCarDetails;
    file: File;
  }) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("OEM_id", OEM_id);
    Object.keys(details).forEach((key) => {
      const val = details[key as keyof SellerCarDetails];
      formData.append(key, String(val));
    });
    const url = new URL(api_uri);
    url.pathname = "/api/cars";
    const response = await axios.post(url.href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data as Cars[];
  }
);

export const deleteCarThunks = createAsyncThunk(
  DELETE_CAR_THUNKS,
  async (id: string) => {
    const url = new URL(api_uri);
    url.pathname = "/api/cars";
    await axios.delete(url.href, {
      data: { id: id },
    });
    return id;
  }
);
export const updateCarThunks = createAsyncThunk(
  UPDATE_CAR_THUNKS,
  async ({
    details,
    file,
    id,
  }: {
    details: SellerCarDetails;
    file: File;
    id: string;
  }) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("id", id);
    Object.keys(details).forEach((key) => {
      const val = details[key as keyof SellerCarDetails];
      formData.append(key, String(val));
    });
    const url = new URL(api_uri);
    url.pathname = "/api/cars";
    const response = await axios.put(url.href, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data as Cars;
  }
);
export const logInThunk = createAsyncThunk(
  USER_LOGIN_THUNK,
  async ({ email, password }: { email: string; password: string }) => {
    const url = new URL(api_uri);
    url.pathname = "/api/user/login";
    let response = await axios.post(url.href, {
      email,
      password,
    });
    return response.data as { name: string };
  }
);
