import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { FormEvent, useEffect, useState } from 'react'
import {
  PostButtons,
  PostCaption,
  PostComments,
  PostHeader,
  PostInput,
} from '.'
import { db } from '../../../firebase'

interface Post {
  id: string
  username: string
  profileImage: string
  image: string
  caption: string
}

interface Comment {
  comment: string
  username: string
  userImage: string
  timestamp: Timestamp
  id: string
}

interface Like {
  id: string
  username: string
}

interface Props {
  post: Post
}

export function Post({
  post: { caption, image, profileImage, username, id },
}: Props) {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<Comment[]>([])
  const [likes, setLikes] = useState<Like[]>([])
  const [hasLiked, setHasLiked] = useState(false)

  const sendComment = async (event: FormEvent) => {
    event.preventDefault()

    const commentToSend = comment
    setComment('')

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session?.user.username,
      userImage: session?.user.image,
      timestamp: serverTimestamp(),
    })
  }

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session?.user.uid!))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session?.user.uid!), {
        username: session?.user.username,
      })
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => {
        let commentsData: Comment[] = []
        snapshot.docs.forEach((commentDoc) => {
          const comment = commentDoc.data() as Comment
          commentsData.push({ ...comment, id: commentDoc.id })
        })
        setComments(commentsData)
      }
    )

    return unsubscribe
  }, [db, id])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', id, 'likes'),
      (snapshot) => {
        let likesData: Like[] = []
        snapshot.docs.forEach((likeDoc) => {
          const like = likeDoc.data() as Like
          likesData.push({ ...like, id: likeDoc.id })
        })
        setLikes(likesData)
      }
    )

    return unsubscribe
  }, [db, id])

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user.uid) !== -1
      ),
    [likes]
  )

  return (
    <div className="my-7 rounded-sm border bg-white">
      <PostHeader username={username} userImage={profileImage} />
      <img src={image} alt="Post image" className="w-full object-cover" />

      {session && <PostButtons handleLike={likePost} hasLiked={hasLiked} />}
      <PostCaption username={username} caption={caption} />

      {comments.length > 0 && <PostComments comments={comments} />}

      {session && (
        <PostInput
          comment={comment}
          onChange={setComment}
          handleSubmit={sendComment}
        />
      )}
    </div>
  )
}
