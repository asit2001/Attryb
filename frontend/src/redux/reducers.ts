import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CAR, USER } from ".";
import { Cars, OEMSpecsType, Sort } from "../type";
import {
  addCar,
  deleteCarThunks,
  getCarsThunks,
  logInThunk,
  omeThunks,
  updateCarThunks,
} from "./thunks";
import { sortCars } from "../util";

const userSlice = createSlice({
  name: USER,
  initialState: {
    loginError: "",
    name: localStorage.getItem("name") || "",
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(logInThunk.fulfilled, (state, action) => {
      state.name = action.payload.name;
      localStorage.setItem("name", action.payload.name);
    });
    builder.addCase(logInThunk.rejected, (state, action) => {
      state.loginError = "invalid email and password";
    });
  },
});

const carSlice = createSlice({
  name: CAR,
  initialState: {
    cars: [] as Cars[],
    oem: [] as OEMSpecsType[],
    oemId: "",
    editCar_id: "",
    sort:"Mh2l" as Sort
  },
  reducers: {
    setOemId: (state, action) => {
      state.oemId = action.payload;
    },
    setEditCarId: (state, action) => {
      state.editCar_id = action.payload;
    },
    setSort: (state,action:PayloadAction<Sort>)=>{
      state.sort = action.payload;
      state.cars = sortCars(state.cars,action.payload);
    }
  },
  extraReducers(builder) {
    builder.addCase(omeThunks.fulfilled, (state, action) => {
      state.oem = action.payload;
    });
    builder.addCase(getCarsThunks.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
    builder.addCase(deleteCarThunks.fulfilled, (state, action) => {
      state.cars = state.cars.filter(({ _id }) => _id !== action.payload);
    });
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.oemId = "";
    });
    builder.addCase(updateCarThunks.fulfilled, (state, action) => {
      state.cars = state.cars.map((car) => {
        if (car._id === state.editCar_id) {
          return action.payload;
        }
        return car;
      });
      state.editCar_id = "";
    });
  },
});
export const carReducer = carSlice.reducer;
export const { setOemId, setEditCarId,setSort } = carSlice.actions;
export const userReducer = userSlice.reducer;
// export const {} = userSlice.actions;
