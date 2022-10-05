import { useState } from 'react'

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
}
const ColorBox = ({ background, name }: ColorBoxPageProps) => {
  const clipboard = useClipboard()

  return (
    <div
      style={{ background }}
      onClick={() => clipboard.copy(background)}
      className='group relative my-0 mx-auto -mb-[7px] inline-block h-[25%] 
      w-[20%] cursor-pointer'
    >
      <div className='copy-container'>
        <div className='absolute left-0 bottom-0 w-full p-2.5 text-xs uppercase tracking-[1px] text-black'>
          <span>{name}</span>
        </div>
        <button
          onClick={() => clipboard.copy(background)}
          className='copy-button absolute  top-[50%] left-[50%] -mt-[15px] -ml-[50px] block
          h-[30px] w-[100px] bg-[rgba(255,255,255,0.3)] text-center text-base uppercase text-white
          opacity-0 outline-none group-hover:opacity-100 group-hover:transition group-hover:delay-100'
        >
          {clipboard.copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <span
        className='absolute right-0 bottom-0 w-16 bg-[rgba(255,255,255,0.3)] 
        text-center uppercase leading-8 text-white'
      >
        More
      </span>
    </div>
  )
}

export default ColorBox
