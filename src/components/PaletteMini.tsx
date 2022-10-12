import { Palette } from '../seedColors'

const PaletteMini = (props: Palette) => {
  const { paletteName, emoji } = props

  return (
    <div
      className='relative overflow-hidden rounded-md border-[1px]
      border-black bg-white p-2 hover:cursor-pointer'
    >
      <div className='bg-gray-300'></div>
      <h5
        className='relative m-0 flex items-center justify-between pt-2 
        text-base text-black'
      >
        {paletteName} <span className='ml-2 text-2xl'>{emoji}</span>
      </h5>
    </div>
  )
}

export default PaletteMini
