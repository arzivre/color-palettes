import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

export default function App() {
  return (
    <div>
      <Palette palette={seedColors[2]} />
      {JSON.stringify(generatePalette(seedColors[2]))}
    </div>
  )
}
