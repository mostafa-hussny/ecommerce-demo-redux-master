import React, { useEffect, useState } from 'react'
import Product from './product';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const data = await fetch('https://fakestoreapi.com/products');
                const products = await data.json();
                setProducts(products);
            } catch (e) {
                console.log(e)
            }
        }
        fetchProducts();
    },[])
    return (
        <div className='products'>
            {products.map(product => (<Product key={product.id} product={product}/>))}
        </div>
    )
}

export default Home