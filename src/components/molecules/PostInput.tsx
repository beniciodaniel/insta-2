import { EmojiHappyIcon } from '@heroicons/react/outline'

export function PostInput() {
  return (
    <form className="flex items-center p-4">
      <EmojiHappyIcon className="h-7" />
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 border-none outline-none focus:ring-0"
      />
      <button className="font-semibold text-blue-400">Post</button>
    </form>
  )
}
