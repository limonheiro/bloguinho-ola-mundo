import {Outlet} from 'react-router-dom'
import Menu from "../../Componentes/Menu"
import Banner from '../Banner'


export default function PaginaPadrao() {
  return (
    <main>
        <Menu/>
        <Banner/>
        <Outlet/>

    </main>
  )
}
