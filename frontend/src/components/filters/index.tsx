import styles from "./Styles/Filters.module.css";
import { Sort } from "../../type";
import { useAppDispatch, useAppSelector,setSort as setAppSort } from "../../redux";

function Filters() {
  const sort = useAppSelector(state=>state.car.sort);
  const dispatch = useAppDispatch();
  function setSort(sort:Sort){
    dispatch(setAppSort(sort));
  }
  return (
    <div className={styles.filters}>
      <p onClick={_=>setSort("Ml2h")} className={sort==="Ml2h"?styles.filter__text__active : styles.filter__text}>Mileage: Low to High</p>
      <p onClick={_=>setSort("Mh2l")} className={sort==="Mh2l"?styles.filter__text__active : styles.filter__text}>Mileage: High to Low</p>
      <p onClick={_=>setSort("Pl2h")} className={sort==="Pl2h"?styles.filter__text__active : styles.filter__text}>Cost: Low to High</p>
      <p onClick={_=>setSort("Ph2l")} className={sort==="Ph2l"?styles.filter__text__active : styles.filter__text}>Cost: High to Low</p>
      <p onClick={_=>setSort("red")}  className={sort ==="red" ?styles.filter__colorBox__active:styles.filter__colorBox} style={{ color: "red" }}></p>
      <p onClick={_=>setSort("blue")} className={sort ==="blue" ?styles.filter__colorBox__active:styles.filter__colorBox} style={{ color: "blue" }}></p>
      <p onClick={_=>setSort("silver")} className={sort ==="silver" ?styles.filter__colorBox__active:styles.filter__colorBox} style={{ color: "silver" }}></p>
      <p onClick={_=>setSort("black")} className={sort ==="black" ?styles.filter__colorBox__active:styles.filter__colorBox} style={{ color: "black" }}></p>
    </div>
  );
}

export default Filters;
