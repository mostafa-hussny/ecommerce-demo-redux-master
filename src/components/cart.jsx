import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartState, clearCart, removeItem } from '../utils/cartSlice'

const Cart = () => {
    const cart = useSelector(cartState)
    const dispatch = useDispatch()
    return (
        <div className='cart'>
            {cart.map(item => (
                <div className='cart-item' key={item.id}>
                    <img src={item.image} alt={item.title} width={100}/>
                    <p>{item.title}</p>
                    <p>{item.price} $</p>
                    <button onClick={()=>{
                        dispatch(removeItem(item.id))
                    }}>remove</button>
                </div>
            ))}
            <button onClick={()=>{
                dispatch(clearCart())
            }}>clear cart</button>
        </div>
    )
}

export default Cart