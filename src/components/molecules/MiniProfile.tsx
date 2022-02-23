import { signOut, useSession } from 'next-auth/react'

export function MiniProfile() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between">
      {session?.user?.image && (
        <img
          className="h-16 w-16 rounded-full border p-[2px]"
          src={session.user?.image}
          alt=""
        />
      )}
      <div className="mx-4 flex-1">
        <h2 className="font-bold">beniciohasegawa</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button
        onClick={() => signOut()}
        className="text-sm font-semibold text-blue-400"
      >
        Sign out
      </button>
    </div>
  )
}
