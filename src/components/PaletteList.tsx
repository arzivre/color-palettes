import seedColors from '../seedColors'
import { Link } from 'react-router-dom'
import PaletteMini from './PaletteMini'

const PaletteList = () => {
  return (
    <div className='h-[110vh] flex items-start justify-center bg-blue-600'>
      <div className='flex w-[60%] flex-col flex-wrap items-start'>
        <nav className='flex w-full justify-between text-white'>
          <h1 className='my-4 text-xl font-semibold'>React Color Pallettes</h1>
        </nav>

        <ol className='border-box grid w-full grid-cols-3 gap-[5%]'>
          {seedColors.map((palette) => (
            <li key={palette.id}>
              <PaletteMini {...palette} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default PaletteList
