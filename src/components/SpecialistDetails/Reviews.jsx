
import React from 'react'
import Comment from '../Comment'

const Reviews = () => {
  return (
    <>
      {[1, 2, 3, 4].map((item, index) =>
        <Comment key={index} />
      )}
    </>
  )
}

export default Reviews