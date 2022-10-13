import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { generatePalette } from '../colorHelpers'
import seedColors from '../seedColors'
import ColorBox from './ColorBox'

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

  const colorBoxes = shades.map((color) => (
    <ColorBox key={color.id} name={color.name} background={color.hex} />
  ))

  return (
    <div className='h-[100vh]'>
      <div className='h-[100%]'>{colorBoxes}</div>
    </div>
  )
}

export default PaletteSingleColor
