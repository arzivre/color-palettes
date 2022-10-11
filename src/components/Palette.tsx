import 'rc-slider/assets/index.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { generatePalette } from '../colorHelpers'
import seedColors from '../seedColors'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

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

const colorsType = [
  { id: 1, name: 'HEX - #FFFFFF', value: 'hex' },
  { id: 2, name: 'RGB - rgb(255,255,255)', value: 'rgb' },
  { id: 3, name: 'RGBA - rgba(255,255,255,1.0)', value: 'rgba' },
]

const Palette = () => {
  const { id } = useParams()

  const [level, setLevel] = useState<number>(500)
  const [type, setType] = useState(colorsType[0])

  const generatedPalette: GeneratedPalette = generatePalette(
    seedColors[id ? Number(id) : 1]
  )
  
  const colorBoxes = generatedPalette.colors[level].map((color) => (
    <ColorBox
      key={color.id}
      background={color[`${type.value as keyof Color}`]}
      name={color.name}
    />
  ))

  return (
    <div className='h-[100vh]'>
      <Navbar
        level={level}
        setLevel={setLevel}
        type={type}
        setType={setType}
        colorsType={colorsType}
      />
      <div className='h-[90%]'>{colorBoxes}</div>
      <footer className='flex h-[5vh] items-center justify-end bg-white font-bold'>
        {generatedPalette.paletteName}
        <span className='mx-[1rem] my-0 text-[1.5rem]'>
          {generatedPalette.emoji}
        </span>
      </footer>
    </div>
  )
}

export default Palette
