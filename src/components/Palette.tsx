import { useState } from 'react'
import ColorBox from './ColorBox'
import 'rc-slider/assets/index.css'
import Navbar from './Navbar'

interface Props {
  generatedPalette: GeneratedPalette
}

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

const Palette = ({ generatedPalette }: Props) => {
  const [level, setLevel] = useState<number>(500)
  const [type, setType] = useState(colorsType[0])

  const colorBoxes = generatedPalette.colors[level].map((color) => (
    <ColorBox
      key={color.id}
      // @ts-ignore
      background={color[`${type.value}`]}
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
      {/* Footer */}
    </div>
  )
}

export default Palette
