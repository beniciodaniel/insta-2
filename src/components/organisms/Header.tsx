import Image from 'next/image'
import { Logo } from '../atoms'

export function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between bg-white">
        {/* Left */}
        <Logo />

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  )
}
