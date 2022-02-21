export function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://avatars.githubusercontent.com/u/52285940?v=4"
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">beniciohasegawa</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Sign out</button>
    </div>
  )
}
