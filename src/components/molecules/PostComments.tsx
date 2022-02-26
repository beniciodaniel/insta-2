import { Timestamp } from 'firebase/firestore'
import Moment from 'react-moment'

interface Comment {
  comment: string
  username: string
  userImage: string
  timestamp: Timestamp
  id: string
}

interface Props {
  comments: Comment[]
}

export function PostComments({ comments }: Props) {
  return (
    <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
      {comments.map((commentObject) => (
        <div
          key={commentObject.id}
          className="mb-3 flex items-center space-x-2"
        >
          <img
            src={commentObject.userImage}
            className="h-7 rounded-full"
            alt=""
          />
          <p className="flex-1 text-sm">
            <span className="mr-2 font-bold">{commentObject.username}</span>
            {commentObject.comment}
          </p>

          <Moment fromNow className="pr-5 text-xs">
            {commentObject?.timestamp?.toDate()}
          </Moment>
        </div>
      ))}
    </div>
  )
}
