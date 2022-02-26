import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import { PostButtons, PostCaption, PostHeader, PostInput } from '.'

interface Post {
  username: string
  profileImage: string
  image: string
  caption: string
}

interface Props {
  post: Post
}

export function Post({
  post: { caption, image, profileImage, username },
}: Props) {
  const { data: session } = useSession()

  return (
    <div className="my-7 rounded-sm border bg-white">
      <PostHeader username={username} userImage={profileImage} />
      <img src={image} alt="Post image" className="w-full object-cover" />

      {session && <PostButtons />}
      <PostCaption username={username} caption={caption} />

      {/* Comments */}

      {session && <PostInput />}
    </div>
  )
}
