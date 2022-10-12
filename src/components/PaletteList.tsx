import seedColors from '../seedColors'
import { Link } from 'react-router-dom'
import PaletteMini from './PaletteMini'

const PaletteList = () => {
  return (
    <div>
      <h1>React Pallettes</h1>
      <ol>
        {seedColors.map((palette) => (
          <li key={palette.id}>
            <PaletteMini />
          </li>
        ))}
      </ol>
    </div>
  )
}

export default PaletteList
