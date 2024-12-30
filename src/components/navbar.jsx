import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import cartIcon from "../assets/images/cart.png"
import { cartState } from '../utils/cartSlice'

const Navbar = () => {
    const cart = useSelector(cartState)
    return (
        <div className='navbar'>
            <Link to={"/"}>
                <h1>E-commerce App</h1>
            </Link>
            <div className='user'>
                <Link className='cart-btn' to='/cart'>
                    <img src={cartIcon} alt='cart'/>
                    <p className='cart-len'>{cart?.length}</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar