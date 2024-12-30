import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const Product = ({product}) => {
    const dispatch = useDispatch()
  return (
    <div className='product-card'>
        <img src={product.image} alt={product.title} width={200}/>
        <p>{product.title.slice(0,20) + "..."}</p>
        <p>{product.price} $</p>
        <button onClick={()=>{
            dispatch(addItem(product))
        }}>Add to cart</button>
    </div>
  )
}

export default Product