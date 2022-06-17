import React from 'react'

const SingleItem = ({_id,image,price,title,desc}) => {
  return (
    <div>
      <img src={image} alt="food" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <h2>{price}</h2>
    </div>
  )
}

export default SingleItem