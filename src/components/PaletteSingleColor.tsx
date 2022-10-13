import { useParams } from 'react-router-dom'

const PaletteSingleColor = () => {
  const { paletteId, colorId } = useParams()

  return (
    <div>
      Single Color Palette {paletteId} {colorId}
    </div>
  )
}

export default PaletteSingleColor
