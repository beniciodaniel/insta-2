import { DotsHorizontalIcon } from '@heroicons/react/outline'

interface Props {
  username: string
  userImage: string
}

export function PostHeader({ username, userImage }: Props) {
  return (
    <div className="flex items-center p-5">
      <img
        className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        src={userImage}
        alt="User"
      />
      <p className="flex-1 font-bold">{username}</p>
      <DotsHorizontalIcon className="h-5" />
    </div>
  )
}
