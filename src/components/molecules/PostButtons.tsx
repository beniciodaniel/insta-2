import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

export function PostButtons() {
  return (
    <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn" />
      </div>

      <BookmarkIcon className="btn" />
    </div>
  )
}
