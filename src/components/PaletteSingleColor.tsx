import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { generatePalette } from '../colorHelpers'
import seedColors from '../seedColors'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

const colorsType = [
  { id: 1, name: 'HEX - #FFFFFF', value: 'hex' },
  { id: 2, name: 'RGB - rgb(255,255,255)', value: 'rgb' },
  { id: 3, name: 'RGBA - rgba(255,255,255,1.0)', value: 'rgba' },
]

interface GeneratedPalette {
  paletteName: string
  id: string
  emoji: string
  colors: { [key: string]: Color[] }
}

interface Color {
  name: string
  id: string
  hex: string
  rgb: string
  rgba: string
}

function gatherShades(palette: GeneratedPalette, colorToFilterBy: string) {
  let _shades: Color[] = []
  let allColors = palette.colors

  for (let key in allColors) {
    _shades = _shades.concat(
      allColors[key].filter((color) => color.id === colorToFilterBy)
    )
  }

  return _shades.slice(1)
}

function findPalette(id: string) {
  return seedColors.findIndex(function (palette) {
    return palette.id === id
  })
}

const PaletteSingleColor = () => {
  const { paletteId, colorId } = useParams()

  const generatedPalette: GeneratedPalette = generatePalette(
    seedColors[findPalette(paletteId as string)]
  )

  const [shades, setShades] = useState(
    gatherShades(generatedPalette, colorId as string)
  )
  const [type, setType] = useState(colorsType[0])

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.id}
      name={color.name}
      background={color[type.value as keyof Color]}
    />
  ))

  return (
    <div className='h-[100vh]'>
      <Navbar type={type} setType={setType} colorsType={colorsType} />
      <div className='h-[88%]'>
        {colorBoxes}
        <div
          className='group relative my-0 mx-auto -mb-[7px] inline-block h-[50%]
          w-[20%] cursor-pointer bg-gray-900'
        >
          <Link
            to={`/palette/${paletteId}`}
            className='absolute top-[50%] left-[50%] -mt-[15px] -ml-[50px] block
          h-[30px] w-[100px] transform text-center text-base uppercase
          text-white outline-none  transition delay-300'
          >
            Go Back
          </Link>
        </div>
      </div>
      <footer className='flex h-[5vh] items-center justify-end bg-white font-bold'>
        {generatedPalette.paletteName}
        <span className='mx-[1rem] my-0 text-[1.5rem]'>
          {generatedPalette.emoji}
        </span>
      </footer>
    </div>
  )
}

export default PaletteSingleColor
