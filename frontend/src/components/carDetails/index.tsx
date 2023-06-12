import { useAppDispatch } from "../../redux";
import { setEditCarId } from "../../redux/reducers";
import { deleteCarThunks } from "../../redux/thunks";
import { Cars } from "../../type";
import style from "./style/car.module.css";
function CarDetails({ data }: { data: Cars }) {
  const dispatch = useAppDispatch();
  const imageUrl = new URL(process.env.REACT_APP_URL as string);
  imageUrl.pathname = data.carImage.replace("public", "");
  return (
    <div className={style.cars}>
      <img className={style.car__img} src={imageUrl.href} alt="car" />
      <div className={style.car__details}>
        <h2 className={style.car__title}>
          {data.OEM_id.OEMname +
            " " +
            data.OEM_id.modelName +
            " " +
            data.OEM_id.year}
        </h2>
        <div className={style.car__details__content}>
          <p>Rides</p>
          <p>{data.KMs}</p>
        </div>
        <div className={style.car__details__content}>
          <p>Major Scratches</p>
          <p>{data.majorScratches ? "YES" : "NO"}</p>
        </div>
        <div className={style.car__details__content}>
          <p>Original Paint</p>
          <p>{data.originalPaint ? "YES" : "NO"}</p>
        </div>
        <div className={style.car__details__content}>
          <p>Number Of Accidents</p>
          <p>{data.numberOfAccidents}</p>
        </div>
        <div className={style.car__details__content}>
          <p>Number Of Previous Buyers</p>
          <p>{data.numberOfPreviousBuyers}</p>
        </div>
        <div className={style.car__details__content}>
          <p>Registration Place</p>
          <p>{data.registrationPlace}</p>
        </div>
        <button
          onClick={() => {
            dispatch(deleteCarThunks(data._id));
          }}
          className={style.delete__btn}
        >
          delete
        </button>
        <button
          onClick={() => {
            dispatch(setEditCarId(data._id));
          }}
          className={style.edit__btn}
        >
          edit
        </button>
      </div>
    </div>
  );
}

export default CarDetails;
