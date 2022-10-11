import seedColors from '../seedColors'
import { Link } from 'react-router-dom'

const PaletteList = () => {
  return (
    <div>
      <h1>React Pallettes</h1>
      <ol>
        {seedColors.map((palette) => (
          <li key={palette.id}>
            <Link to={`palette/${palette.id}`}>{palette.paletteName}</Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default PaletteList
