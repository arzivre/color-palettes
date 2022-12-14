import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Palette = lazy(() => import('./components/Palette'))
const PaletteForm = lazy(() => import('./components/PaletteForm'))
const PaletteList = lazy(() => import('./components/PaletteList'))
const PaletteSingleColor = lazy(() => import('./components/PaletteSingleColor'))

const loading = (
  <p className='align-center h-[100vh] justify-center text-center'>
    Loading ...
  </p>
)

export default function App() {
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path='/' element={<PaletteList />} />
        <Route path='/palette/new' element={<PaletteForm />} />
        <Route path='/palette/:id' element={<Palette />} />
        <Route
          path='/palette/:paletteId/:colorId'
          element={<PaletteSingleColor />}
        />
      </Routes>
    </Suspense>
  )
}
