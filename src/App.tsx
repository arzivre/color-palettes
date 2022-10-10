import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Palette generatedPalette={generatePalette(seedColors[1])} />}
      />
      <Route
        path='/palette/:id'
        element={<Palette generatedPalette={generatePalette(seedColors[1])} />}
      />
    </Routes>
  )
}
