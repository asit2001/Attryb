
import { OEMSpecsType } from "../../type";
import style from "./style/oemDetails.module.css";
function OemDetails({data}:{data:OEMSpecsType}) {
  return (
    <div className={style.omeDetails}>
      <div className={style.ome__details__content}>
        <p>title</p>
        <p>
          {data.OEMname +
            " " +
            data.modelName +
            " " +
            data.year}
        </p>
      </div>
      <div className={style.ome__details__content}>
        <p>model</p>
        <p>{data.modelName}</p>
      </div>
      <div className={style.ome__details__content}>
        <p>max speed</p>
        <p>{data.maxSpeed} kmph</p>
      </div>
      <div className={style.ome__details__content}>
        <p>power</p>
        <p>{data.power} BPH</p>
      </div>
      <div className={style.ome__details__content}>
        <p>colors</p>
        <p>{data.colors.join(", ")}</p>
      </div>
      <div className={style.ome__details__content}>
        <p>price</p>
        <p>{data.price}</p>
      </div>
    </div>
  );
}

export default OemDetails;
