import { MiniProfile, Posts, Stories, Suggestions } from '../molecules'

export function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20 mt-14 ml-10 space-y-4">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}
