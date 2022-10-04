import { Color } from '../seedColors'

interface ColorBoxPageProps {
  background: string
  name: string
}
const ColorBox = ({ background, name }: ColorBoxPageProps) => {
  return (
    <div
      style={{ background: `${background}` }}
      className='relative my-0 mx-auto inline-block h-[25%] w-[20%] cursor-pointer'
    >
      <span>{name}</span>
      <span>MORE</span>
    </div>
  )
}

export default ColorBox
