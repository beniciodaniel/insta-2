import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

interface Props {
  handleLike: () => void
  hasLiked: boolean
}

export function PostButtons({ handleLike, hasLiked }: Props) {
  return (
    <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
        {hasLiked ? (
          <HeartIconFilled onClick={handleLike} className="btn text-red-500" />
        ) : (
          <HeartIcon onClick={handleLike} className="btn" />
        )}
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn" />
      </div>

      <BookmarkIcon className="btn" />
    </div>
  )
}
