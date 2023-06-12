import { Cars } from "../../type"
import style from "./style/card.module.css"
function Card({data}:{data:Cars}) {
  const imageUrl = new URL(process.env.REACT_APP_URL as string);
  imageUrl.pathname = data.carImage.replace("public", "");
  return (
    <div className={style.CardContainer}>
      <div className={style.imgContainer}>
      <img className={style.img} src={imageUrl.href} alt="car" />
      </div>
      <h2 className={style.title}>{`${data.OEM_id.OEMname} ${data.OEM_id.modelName} ${data.OEM_id.year}`}</h2>
      <p className={style.description}>
        <span className={style.item}>{data.KMs} KM</span>
        <span className={style.item}>{data.numberOfPreviousBuyers} owner</span>
        <span className={style.item}>{data.originalPaint?"Original Paint":"Painted"}</span>
        <span className={style.item}>{data.numberOfAccidents} accidents</span>
        <span className={style.item}>{data.majorScratches?"Major Scratches Present":"No Major Scratches"}</span>
      </p>
      <p className={style.price}>{data.OEM_id.price}</p>
    </div>
  )
}

export default Card