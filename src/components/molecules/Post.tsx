import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import { PostHeader } from '.'

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

      {/* Image */}

      {/* Buttons */}

      {/* Caption */}

      {/* Comments */}

      {/* Input */}
    </div>
  )
}
