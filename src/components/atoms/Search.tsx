import { SearchIcon } from '@heroicons/react/outline'

export function Search() {
  return (
    <div className="max-w-xs">
      <div className="relative mt-1 rounded-md p-3">
        <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
