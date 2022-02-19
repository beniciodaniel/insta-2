import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { PostButtons, PostCaption, PostHeader, PostInput } from '.'

interface Post {
  id: string | number
  username: string
  userImage: string
  image: string
  caption: string
}

interface Props {
  post: Post
}

export function Post({
  post: { caption, id, image, userImage, username },
}: Props) {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <PostHeader username={username} userImage={userImage} />
      <img src={image} alt="Post image" className="w-full object-cover" />
      <PostButtons />
      <PostCaption username={username} caption={caption} />

      {/* Comments */}

      <PostInput />
    </div>
  )
}
