import { Listbox } from '@headlessui/react'
import Slider from 'rc-slider'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

interface ColorType {
  id: number
  name: string
  value: string
}
interface Props {
  level: number
  setLevel: Dispatch<SetStateAction<number>>
  type: ColorType
  setType: Dispatch<SetStateAction<ColorType>>
  colorsType: ColorType[]
}
const Navbar = ({ level, setLevel, type, setType, colorsType }: Props) => {
  return (
    <header className='flex h-[6vh] items-center justify-between'>
      <div className='mr-3.5 flex h-full items-center bg-[#eceff1] py-0 px-3 font-serif text-lg'>
        <Link to='/'>
        reactcolorpalettes
        </Link>
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
      <div className='w-72 '>
        <Listbox value={type} onChange={setType}>
          <div className='relative z-10 mt-1'>
            <Listbox.Button
              className='relative w-full cursor-pointer 
            rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md
            focus:outline-none focus-visible:border-indigo-500
            focus-visible:ring-2 focus-visible:ring-white
            focus-visible:ring-opacity-75 focus-visible:ring-offset-2
            focus-visible:ring-offset-orange-300 sm:text-sm'
            >
              {type.name}
            </Listbox.Button>
            <Listbox.Options
              className='absolute mt-1 max-h-60 w-full cursor-pointer 
            overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
            ring-black ring-opacity-5 focus:outline-none sm:text-sm'
            >
              {colorsType.map((color) => (
                <Listbox.Option key={color.id} value={color}>
                  {color.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
    </header>
  )
}

export default Navbar
