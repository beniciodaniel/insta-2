import { Logo, Search } from '../atoms'
import { NavButtons } from '../molecules'

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        <Logo />
        <Search />
        <NavButtons />
      </div>
    </div>
  )
}
