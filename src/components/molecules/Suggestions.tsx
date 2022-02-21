import { ContextualCard } from '@faker-js/faker/helpers'
import { useEffect, useState } from 'react'
import { SuggestionProfile } from '.'
import { getFakerUsers } from '../../utils/getFakerUsers'

interface FakeSuggestionsUsers extends ContextualCard {
  id: number
}

export function Suggestions() {
  const [suggestions, setSuggestions] = useState<FakeSuggestionsUsers[]>([])

  useEffect(() => {
    const usersSuggested = getFakerUsers(5)
    setSuggestions(usersSuggested)
  }, [])

  return (
    <div>
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See all</button>
      </div>

      <div className="space-y-3">
        {suggestions.map((profile) => (
          <SuggestionProfile key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  )
}
