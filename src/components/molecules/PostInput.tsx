import { EmojiHappyIcon } from '@heroicons/react/outline'
import { Dispatch, FormEvent, SetStateAction } from 'react'

interface Props {
  comment: string
  onChange: Dispatch<SetStateAction<string>>
  handleSubmit: (event: FormEvent) => Promise<void>
}

export function PostInput({ comment, onChange, handleSubmit }: Props) {
  return (
    <form className="flex items-center p-4">
      <EmojiHappyIcon className="h-7" />
      <input
        type="text"
        value={comment}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Add a comment..."
        className="flex-1 border-none outline-none focus:ring-0"
      />
      <button
        type="submit"
        disabled={!comment.trim()}
        onClick={handleSubmit}
        className="font-semibold text-blue-400"
      >
        Post
      </button>
    </form>
  )
}
