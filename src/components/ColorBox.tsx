import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const notify = (text: string) =>
  toast(`Copied ${text}`, {
    position: 'bottom-center',
  })

function useClipboard({ timeout = 2000 } = {}) {
  const [error, setError] = useState<Error | null>(null)
  const [copied, setCopied] = useState(false)
  const [copyTimeout, setCopyTimeout] = useState<number | undefined>()

  const handleCopyResult = (value: boolean) => {
    clearTimeout(copyTimeout)
    setCopyTimeout(setTimeout(() => setCopied(false), timeout))
    setCopied(value)
  }

  const copy = (valueToCopy: any) => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err))
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'))
    }
  }

  const reset = () => {
    setCopied(false)
    setError(null)
    clearTimeout(copyTimeout)
  }

  return { copy, reset, error, copied }
}

interface ColorBoxPageProps {
  background: string
  name: string
  moreUrl: string
  colorId?: string
  paletteId?: string
}
const ColorBox = ({
  background,
  name,
  moreUrl,
}: ColorBoxPageProps) => {
  const clipboard = useClipboard({ timeout: 1500 })

  return (
    <>
      <div
        style={{ background }}
        onClick={() => {
          clipboard.copy(background)
          notify(background)
        }}
        className='group relative my-0 mx-auto -mb-[7px] inline-block h-[25%] 
      w-[20%] cursor-pointer'
      >
        <div
          style={{ background }}
          className={`h-full w-full
        ${
          clipboard.copied
            ? 'absolute z-10  transform opacity-100 transition delay-150 ease-in-out'
            : 'z-0 scale-50 transform opacity-0 transition delay-150 ease-in-out'
        }`}
        />
        <div
          className={`fixed left-0 right-0 top-0 bottom-0 flex scale-[0.1]
        flex-col items-center justify-center text-[400px] text-white opacity-0
         ${
           clipboard.copied
             ? 'z-20 scale-[1] transform opacity-100 transition delay-150 '
             : ''
         }
      `}
        >
          <h1
            className='w-[vw-100] transform bg-[rgba(255,255,255,0.2)] p-4 
          text-center font-semibold uppercase transition delay-150 '
          >
            Copied!
          </h1>
          <p className='text-[300px]'>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='absolute left-0 bottom-0 w-full p-2.5 text-xs uppercase tracking-[1px] text-black'>
            <span>{name}</span>
          </div>
          <button
            className='copy-button absolute  top-[50%] left-[50%] -mt-[15px] -ml-[50px] block
          h-[30px] w-[100px] transform bg-[rgba(255,255,255,0.3)] text-center text-base uppercase
          text-white opacity-0 outline-none  transition delay-300 group-hover:opacity-100'
          >
            {clipboard.copied ? `Copied - ${background}` : 'Copy'}
          </button>
        </div>
        <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
          <span
            className='absolute right-0 bottom-0 w-16 bg-[rgba(255,255,255,0.3)] 
        text-center uppercase leading-8 text-white'
          >
            More
          </span>
        </Link>
      </div>
      <Toaster />
    </>
  )
}

export default ColorBox
