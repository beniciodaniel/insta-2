import { Post } from '.'

const posts = [
  {
    id: '123',
    username: 'beniciohasegawa',
    userImage: 'https://avatars.githubusercontent.com/u/52285940?v=4',
    image: 'https://avatars.githubusercontent.com/u/52285940?v=4',
    caption: 'THIS IS DOPE',
  },
  {
    id: '1234',
    username: 'benicrazy',
    userImage: 'https://avatars.githubusercontent.com/u/52285940?v=4',
    image: 'https://avatars.githubusercontent.com/u/52285940?v=4',
    caption: 'THIS IS DOPE',
  },
]

export function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
