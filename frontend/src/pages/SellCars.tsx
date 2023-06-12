import { useState,useEffect } from "react";
import CarDetails from "../components/carDetails";
import NavBar from "../components/navbar";
import style from "./style/sellCars.module.css";
import Search from "../components/search";
import {useAppDispatch, useAppSelector } from "../redux";
import OemDetails from "../components/oemDetails";
import SellerForm from "../components/sellerForm";
import { useNavigate } from "react-router-dom";
import { setEditCarId, setOemId } from "../redux/reducers";
function SellCars() {
  const [showAdd, setShowAdd] = useState(false);
  const [{ oemId, oem,cars,editCar_id },name] = useAppSelector((state) => [state.car,state.user.name]);
  const selectedOem = oem.filter(({ _id }) => _id === oemId)[0];
  const selectedCar = cars.filter(({_id})=>_id === editCar_id)[0];
  const navigate = useNavigate()  
  const dispatch = useAppDispatch()
  useEffect(()=>{
      if (!name) {
        navigate("/login");
      }
    },[name,navigate])
  return (
    <div>
      <NavBar />
      <main className={style.container}>
        <ul className={style.sidebar}>
          <h3 className={style.title}>Dashboard</h3>
          <li
            onClick={(_) => setShowAdd(false)}
            className={showAdd?style.sidebar__item :style.sidebar__item__active}
          >
            Manage cars
          </li>
          <li onClick={(_) => {setShowAdd(true);dispatch(setEditCarId(""));dispatch(setOemId(""))}} className={showAdd?style.sidebar__item__active:style.sidebar__item}>
            Add new car
          </li>
        </ul>
        <div className={style.rightContainer}>
          {!editCar_id && !showAdd && cars.map(car=><CarDetails key={car._id} data={car}/>)}
          {showAdd && (
            <>
              <Search />
              {!!oemId && !editCar_id && (
                <>
                <h2 className={style.rightContainer__title}>add car</h2>
                  <OemDetails data={selectedOem}/>
                  <SellerForm colors={selectedOem.colors}/>
                </>
              )}
            </>
          )}
          {
            !!editCar_id && <div className={style.overlay}>
            <h2 className={style.rightContainer__title}>Update</h2>
            <OemDetails data={selectedCar.OEM_id}/>
            <SellerForm data={selectedCar} update colors={selectedCar.OEM_id.colors}/>
          </div>
          }
        </div>
      </main>
    </div>
  );
}

export default SellCars;
