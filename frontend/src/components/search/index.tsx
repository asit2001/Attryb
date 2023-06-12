import { useState, useEffect } from "react";
import style from "./style/search.module.css";
import { useAppDispatch, useAppSelector } from "../../redux";
import { omeThunks } from "../../redux/thunks";
import { setOemId } from "../../redux/reducers";

function Search() {
  const dispatch = useAppDispatch();
  const { oem } = useAppSelector((state) => state.car);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (search.length > 3) {
        dispatch(omeThunks({ search }));
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [dispatch, search]);
  return (
    <div className={style.main_component}>
      <div className={style.search}>
        <input
          type="text"
          placeholder="type car model"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <ul className={style.searched__list}>
          {search.length > 3 &&
            oem.map(({ OEMname, _id, modelName, year }) => {
              return (
                <li
                  key={_id}
                  onClick={(_) => {
                    dispatch(setOemId(_id));
                    setSearch("");
                  }}
                >
                  {OEMname} {modelName} {year}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Search;
