import { useState } from 'react'
import Slider from 'rc-slider'
import ColorBox from './ColorBox'
import 'rc-slider/assets/index.css'

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

const Palette = ({ generatedPalette }: Props) => {
  const [level, setLevel] = useState<number>(500)

  const colorBoxes = generatedPalette.colors[level].map((color) => (
    <ColorBox key={color.id} background={color.hex} name={color.name} />
  ))

  return (
    <div className='h-[100vh]'>
      <div className='my-0 mx-2.5 w-[340px] inline-block'>
        <Slider
          min={100}
          max={900}
          step={100}
          defaultValue={level}
          onChange={(nextValues) => {
            setLevel(nextValues as number)
          }}
        />
      </div>
      <div className='h-[90%]'>{colorBoxes}</div>
      {/* Footer */}
    </div>
  )
}

export default Palette
