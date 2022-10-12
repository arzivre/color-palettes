import seedColors from '../seedColors'
import { useNavigate } from 'react-router-dom'
import PaletteMini from './PaletteMini'

const PaletteList = () => {
  const navigate = useNavigate()

  function goToPalette(id: string) {
    navigate(`palette/${id}`)
  }

  return (
    <div className='flex h-[110vh] items-start justify-center bg-blue-600'>
      <div className='flex w-[60%] flex-col flex-wrap items-start'>
        <nav className='flex w-full justify-between text-white'>
          <h1 className='my-4 text-xl font-semibold'>React Color Pallettes</h1>
        </nav>

        <ol className='border-box grid w-full grid-cols-3 gap-[5%]'>
          {seedColors.map((palette) => (
            <li key={palette.id}>
              <PaletteMini palette={palette} handleClick={goToPalette} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default PaletteList
