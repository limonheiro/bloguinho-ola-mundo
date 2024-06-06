import Inicio from './paginas/Inicio'
import SobreMin from "./paginas/SobreMim"
import NaoEncontrado from "./paginas/NaoEncontrado"
import ScrollToTop from "./Componentes/ScrollToTop"
import Post from './Componentes/Post'

import PaginaPadrao from './Componentes/PaginaPadrao'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobre' element={<SobreMin />} />
        </Route>
        <Route path='posts/:id' element={<Post />} />
        <Route path='*' element={<NaoEncontrado />} />

        {/* <Route path='/' element={<Menu />}>
        </Route> */}
      </Routes>
    </>
  )
}

export default App
