import React, { useEffect, useState } from 'react';

import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';


const Cart = () => {

  const {cart} = useSelector( (state) => state )
  const [totalAmount, setTotalAmount] = useState();
  console.log(cart)

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0 ) )
  }, [cart] )

  return (

    <div>
      
      {
        cart.length > 0 ?
        (<div>
          <div>
            {
              cart.map( (item, index) => {
                return <CartItem key={item.id}  item={item} index={index}/>
              } )
            }
          </div>

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>
                Total Items: {cart.length}
              </span>
            </p>
          </div>

          <div>

          </div>
            <p>Total Amount: $ {totalAmount}</p>
            <button>
              CheckOut Now
            </button>
          </div>
        ):
        (
          <div>
            <h1>Cart Empty</h1>
            <Link to = {"/"}>
            <button>
              Shop Now
            </button>
            </Link>
          </div>
        )
      }

    </div>
  )
}

export default Cart
