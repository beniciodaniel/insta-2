interface Profile {
  id: number
  avatar: string
  username: string
  company: {
    name: string
  }
}

interface Props {
  profile: Profile
}

export function SuggestionProfile({ profile }: Props) {
  return (
    <div className="flex items-center justify-between" key={profile.id}>
      <img
        className="h-10 w-10 rounded-full border p-[2px]"
        src={profile.avatar}
        alt=""
      />

      <div className="ml-4 flex-1">
        <h2 className="text-sm font-semibold">{profile.username}</h2>
        <h3 className="text-xs text-gray-400">
          Works at {profile.company.name}
        </h3>
      </div>

      <button className="text-xs font-bold text-blue-400">Follow</button>
    </div>
  )
}
