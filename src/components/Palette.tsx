import { PaletteProps } from '../seedColors'
import ColorBox from './ColorBox'

const Palette = (palette: PaletteProps) => {
  const colorBoxes = palette.palette.colors.map((color) => (
    <ColorBox background={color.color} name={color.name} />
  ))

  return (
    <div className='h-[100vh]'>
      {/* Navbar */}
      <div className='h-[90%]'>{colorBoxes}</div>
      {/* Footer */}
    </div>
  )
}

export default Palette
