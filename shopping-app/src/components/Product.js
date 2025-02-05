import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../Redux/Slices/CartSlice'

const Product = (posts) => {

  const {cart} = useSelector((state) => state);
  console.log(posts)

  console.log("Logging the posts from Post.id", posts.post.id)

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(posts.post.id));
  }


  const addToCart = () =>{
    dispatch(add(posts.post))
  }
  
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
      <div>
        {
          cart.some((p) => p.id === posts.post.id) ?
          (
            <button onClick={removeFromCart}>
              Remove from Cart
            </button>
          ):
          (
            <button onClick={addToCart}>
              Add to Cart
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Product
