import { Palette } from '../seedColors'

const PaletteMini = (props: Palette) => {
  const { paletteName, emoji, colors } = props

  const colorBoxesMini = colors.map((color) => (
    <div
      key={color.name}
      style={{ backgroundColor: color.color }}
      className='relative my-0 mx-auto -mb-1.5 inline-block h-[25%] w-[20%]'
    />
  ))

  return (
    <div
      className='relative overflow-hidden rounded-md border-[1px]
      border-black bg-white p-2 hover:cursor-pointer'
    >
      <ol className='h-36 w-full overflow-hidden rounded'>{colorBoxesMini}</ol>
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
