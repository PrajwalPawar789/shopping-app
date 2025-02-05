import React from 'react'
import { MdDelete } from "react-icons/md";

const CartItem = (item, itemIndex) => {

  console.log("loggin the cart from CartItem.js", item);

  return (
    <div>
      <div>
        <div>
          <img src={item.item.image}/>
        </div>
        <div>
          <h1>{item.item.title}</h1>
          <h1>{item.item.description}</h1>
          <div>
            <p>{item.item.price}</p>
            <div>
            <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
