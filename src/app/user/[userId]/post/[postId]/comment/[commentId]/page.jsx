import React from 'react'

const CommentId = async ({params}) => {
    const {userId,postId,commentId} = await params;
  return (
    <div>PostId: {postId}
    UserId: {userId}
    comment: {commentId}
    </div>
    
  )
}

export default CommentId