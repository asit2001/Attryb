import {Link, useLocation} from "react-router-dom"
import style from "./style/navbar.module.css"
import { useAppDispatch, useAppSelector } from "../../redux"
import { useEffect } from "react"
import { getCarsThunks } from "../../redux/thunks"
function NavBar() {
  const path = useLocation().pathname
  const name = useAppSelector(state=>state.user.name)
  const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getCarsThunks());
    },[dispatch])
  return (
    <header className={style.header}>
        <nav className={style.nav}>
            <Link className={`${style.nav__link}  ${style.logo}`} to={"/"}>BUYC Corp</Link>
            <div className={style.main_links}>
            <Link className={path ==="/" ?style.nav__link__active:style.nav__link} to={"/"}>BUY CAR</Link>
            <Link className={path ==="/sell" ?style.nav__link__active:style.nav__link} to={"/sell"}>SELL CAR</Link>
            </div>
            {!!name ?<Link className={style.nav__link} to={""}>{name}</Link>: <Link className={style.nav__link} to={"/login"}>LogIn</Link>}
            
        </nav>
    </header>
  )
}

export default NavBar