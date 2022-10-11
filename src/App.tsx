import Palette from './components/Palette'
import { Routes, Route, useParams } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Palette />} />
      <Route path='/palette/:id' element={<Palette />} />
    </Routes>
  )
}
