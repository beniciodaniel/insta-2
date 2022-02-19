interface Props {
  username: string
  caption: string
}

export function PostCaption({ caption, username }: Props) {
  return (
    <p className="truncate p-5">
      <span className="mr-1 font-bold">{username}</span>
      {caption}
    </p>
  )
}
