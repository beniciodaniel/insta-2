import { Logo, Search } from '../atoms'
import { SearchIcon } from '@heroicons/react/outline'

export function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between bg-white">
        {/* Left */}
        <Logo />

        {/* Middle */}
        <Search />

        {/* Right */}
      </div>
    </div>
  )
}
