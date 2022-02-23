import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function NavButtons() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <div className="flex items-center justify-end space-x-4">
      <HomeIcon onClick={() => router.push('/')} className="navButton" />
      <MenuIcon
        onClick={() => router.push('/')}
        className="h-6 cursor-pointer md:hidden"
      />

      {session ? (
        <>
          <div className="navButton relative">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navButton" />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />

          {session?.user?.image && (
            <img
              onClick={() => signOut()}
              className="h-10 w-10 cursor-pointer rounded-full"
              src={session?.user?.image}
              alt="Profile pic"
            />
          )}
        </>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      )}
    </div>
  )
}
