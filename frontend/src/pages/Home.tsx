import Card from "../components/cards"
import Filters from "../components/filters"
import NavBar from "../components/navbar"
import { useAppSelector } from "../redux"
import style from "./style/home.module.css"
function Home() {
  const {cars} = useAppSelector(state=>state.car);
 
  return (
    <>
    <NavBar/>
      <Filters/>
    <main className={style.container}>
      {
        cars.map(car=><Card key={car._id} data={car}/>)
      }
    </main>
    </>
  )
}

export default Home