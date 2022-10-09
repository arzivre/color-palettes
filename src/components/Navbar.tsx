import { Dispatch, SetStateAction } from 'react'
import Slider from 'rc-slider'

interface Props {
  level: number
  setLevel: Dispatch<SetStateAction<number>>
}
const Navbar = ({ level, setLevel }: Props) => {
  return (
    <header className='flex h-[6vh] items-center justify-start'>
      <div className='mr-3.5 flex h-full items-center bg-[#eceff1] py-0 px-3 font-serif text-lg'>
        <a href='#'>reactcolorpalettes</a>
      </div>
      <div>
        <span>Level: {level}</span>
        <div className='my-0 mx-2.5 inline-block w-[340px]'>
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
      </div>
    </header>
  )
}

export default Navbar
