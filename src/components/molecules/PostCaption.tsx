interface Like {
  id: string
  username: string
}

interface Props {
  username: string
  caption: string
  likes: Like[]
}

export function PostCaption({ caption, username, likes }: Props) {
  return (
    <p className="truncate p-5">
      {likes?.length > 0 && (
        <p className="mb-1 font-bold">{likes.length} likes</p>
      )}
      <span className="mr-1 font-bold">{username}</span>
      {caption}
    </p>
  )
}
