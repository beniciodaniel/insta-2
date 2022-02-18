import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export function NavButtons() {
  return (
    <div className="flex items-center justify-end space-x-4">
      <HomeIcon className="navButton" />
      <MenuIcon className="h-6 cursor-pointer md:hidden" />

      <div className="navButton relative">
        <PaperAirplaneIcon className="navButton rotate-45" />
        <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
          3
        </div>
      </div>
      <PlusCircleIcon className="navButton" />
      <UserGroupIcon className="navButton" />
      <HeartIcon className="navButton" />

      <img
        className="h-10 cursor-pointer rounded-full"
        src="https://avatars.githubusercontent.com/u/52285940?v=4"
        alt="Profile pic"
      />
    </div>
  )
}
