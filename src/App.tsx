import Palette from './components/Palette'
import seedColors from './seedColors'

export default function App() {
  return (
    <div>
      <Palette palette={seedColors[4]} />
    </div>
  )
}
