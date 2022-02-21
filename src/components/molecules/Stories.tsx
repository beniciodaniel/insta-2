import { ContextualCard } from '@faker-js/faker/helpers'
import { useEffect, useState } from 'react'
import { getFakerUsers } from '../../utils/getFakerUsers'
import { Story } from '../atoms'

interface FakeUsersProps extends ContextualCard {
  id: number
}

export function Stories() {
  const [users, setUsers] = useState<FakeUsersProps[]>([])

  useEffect(() => {
    const fakeUsers = getFakerUsers(20)
    setUsers(fakeUsers)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {users.map((profile) => (
        <Story
          key={profile.id}
          image={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}
