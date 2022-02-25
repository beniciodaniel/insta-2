import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Post } from '.'
import { db } from '../../../firebase'

interface Post {
  id: string
  username: string
  profileImage: string
  image: string
  caption: string
  timestamp: {
    seconds: number
  }
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        let postsData: Post[] = []
        snapshot.docs.forEach((postDoc) => {
          const post = postDoc.data() as Post
          postsData.push({ ...post, id: postDoc.id })
        })
        setPosts(postsData)
      }
    )

    return unsubscribe
  }, [db])

  console.log('posts', posts)

  return (
    <div>
      {posts.map((post: Post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
