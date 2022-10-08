import Palette from './components/Palette'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

export default function App() {
  return (
    <div>
      <Palette generatedPalette={generatePalette(seedColors[4])} />
    </div>
  )
}
