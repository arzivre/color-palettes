import Palette from './components/Palette'
import { Routes, Route, useParams } from 'react-router-dom'
import PaletteList from './components/PaletteList'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<PaletteList />} />
      <Route path='/palette/:id' element={<Palette />} />
      <Route
        path='/palette/:paletteId/:colorId'
        element={<h1>Single Color Page</h1>}
      />
    </Routes>
  )
}
