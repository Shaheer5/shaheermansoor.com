'use client'
import { TypeAnimation } from 'react-type-animation'

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'writing code 🖥.',
        3000,
        'building things 🚀.',
        3000,
        'solving problems 💡.',
        3000,
      ]}
      wrapper="span"
      speed={70}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}

export default TypingAnimation
