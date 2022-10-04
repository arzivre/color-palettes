import { Color } from '../seedColors'

interface ColorBoxPageProps {
  background: string
  name: string
}
const ColorBox = ({ background, name }: ColorBoxPageProps) => {
  return (
    <div
      style={{ background }}
      className='group relative my-0 mx-auto -mb-[7px] inline-block h-[25%] 
      w-[20%] cursor-pointer'
    >
      <div className='copy-container'>
        <div className='absolute left-0 bottom-0 w-full p-2.5 text-xs uppercase tracking-[1px] text-black'>
          <span>{name}</span>
        </div>
        <button
          className='copy-button absolute  top-[50%] left-[50%] -mt-[15px] -ml-[50px] block
          h-[30px] w-[100px] bg-[rgba(255,255,255,0.3)] text-center text-base uppercase text-white
          opacity-0 outline-none group-hover:opacity-100 group-hover:transition group-hover:delay-100'
        >
          Copy
        </button>
      </div>
      <span
        className='absolute right-0 bottom-0 w-16 bg-[rgba(255,255,255,0.3)] 
        text-center leading-8 text-white uppercase'
      >
        More
      </span>
    </div>
  )
}

export default ColorBox
