interface Props {
  image: string
  username: string
}

export function Story({ image, username }: Props) {
  return (
    <div>
      <img
        src={image}
        alt="Avatar"
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}
