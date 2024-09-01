'use client'
import { TypeAnimation } from 'react-type-animation'

const TypingAnimation = ({ data }: { data: string }) => {
  return (
    <TypeAnimation
      sequence={[data, 3000, '', 1000]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypingAnimation
