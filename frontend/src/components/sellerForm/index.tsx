import { FormEvent, useState } from "react";
import { Cars, SellerCarDetails } from "../../type";
import style from "./style/sellerForm.module.css";
import { useAppDispatch, useAppSelector } from "../../redux";
import { addCar, updateCarThunks } from "../../redux/thunks";
import { setEditCarId, setOemId } from "../../redux/reducers";

function SellerForm({data,update,colors}:{data?:SellerCarDetails|Cars,update?:boolean,colors:string[]}) {
  const {oemId:OEM_id,editCar_id} = useAppSelector((state) => state.car);
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File>();
  const [state, setState] = useState<SellerCarDetails| Cars>({
    KMs: data?.KMs|| 100000,
    majorScratches: data?.majorScratches|| true,
    numberOfAccidents: data?.numberOfAccidents ||0,
    numberOfPreviousBuyers: data?.numberOfPreviousBuyers ||0,
    originalPaint:  data?.originalPaint|| true,
    registrationPlace: data?.registrationPlace|| "",
    color:data?.color || colors[0]
  });
  function handelSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!update) {
      dispatch(addCar({ details: state, file: file!, OEM_id }));
    }else{
      dispatch(updateCarThunks({details:state,file:file!,id:editCar_id}))
    }
  }
  return (
    <form className={style.form} onSubmit={handelSubmit}>
      <h2 className={style.title}>car Details</h2>
      <div className={style.car__details}>
        <label htmlFor="rides">Rides</label>
        <div className={style.input}>
          <input
            type="number"
            value={state.KMs}
            onChange={(e) =>
              setState({ ...state, KMs: Number(e.target.value) })
            }
          />
          <p className={style.unit}>Kms</p>
        </div>
      </div>
      <div className={style.car__details}>
        <label htmlFor="rides">Original Paint</label>
        <select
          className={style.input}
          value={String(state.originalPaint)}
          onChange={(e) =>
            setState({ ...state, originalPaint: e.target.value === "true" })
          }
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className={style.car__details}>
        <label htmlFor="rides">Color</label>
        <select
          className={style.input}
          value={state.color}
          onChange={(e) =>
            setState({ ...state, color: e.target.value })
          }
        >
          {
            colors.map(color=><option key={color} value={color}>{color}</option>)
          }
        </select>
      </div>
      <div className={style.car__details}>
        <label htmlFor="rides">Major Scratches</label>
        <select
          className={style.input}
          value={String(state.majorScratches)}
          onChange={(e) =>
            setState({ ...state, majorScratches: e.target.value === "true" })
          }
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className={style.car__details}>
        <label htmlFor="rides">Number of accidents</label>
        <div className={style.input}>
          <input
            type="number"
            value={state.numberOfAccidents}
            onChange={(e) =>
              setState({ ...state, numberOfAccidents: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <div className={style.car__details}>
        <label htmlFor="rides">previous buyers</label>
        <div className={style.input}>
          <input
            type="number"
            value={state.numberOfPreviousBuyers}
            onChange={(e) =>
              setState({
                ...state,
                numberOfPreviousBuyers: Number(e.target.value),
              })
            }
          />
        </div>
      </div>
      <div className={style.car__details}>
        <label htmlFor="rides">Registration Place</label>
        <div className={style.input}>
          <input
            type="text"
            value={state.registrationPlace}
            onChange={(e) =>
              setState({ ...state, registrationPlace: e.target.value })
            }
          />
        </div>
      </div>
      <div className={style.car__details}>
        <div className={style.imgPreview}>
          {!file ? (
            <p>upload to view image</p>
          ) : (
            <img
              className={style.img}
              src={URL.createObjectURL(file as Blob)}
              alt="preview"
            />
          )}
        </div>
        <div className={style.img__input}>
          <label htmlFor="rides">car image</label>
          <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        </div>
      </div>
      <button
        disabled={!state.registrationPlace || !file}
        className={style.btn}
      >
        {update?"Update":"Add"}
      </button>
      <button
      onClick={_=>{dispatch(setEditCarId(""));dispatch(setOemId(""))}}
        className={style.btn}
      >
        cancel
      </button>
    </form>
  );
}

export default SellerForm;
