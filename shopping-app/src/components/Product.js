import React from 'react'

const Product = (posts) => {

  console.log(posts)

  return (
    <div>
      <div>
        <p>{posts.post.title}</p>
      </div>
      <div>
        <p>{posts.post.description}</p>
      </div>
      <div>
          <img src={posts.post.image} />
          {console.log(posts.post.image)} 
      </div>
      <div>
        <p>{posts.post.price}</p>
      </div>

    </div>
  )
}

export default Product
