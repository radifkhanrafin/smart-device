import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Cards/ProductCard';
import { addToDB } from '../../utiliti/fakeDB';
import { CartContext, ProductContext } from '../../App';

const Shop = () => {
     const products = useContext(ProductContext)
     const [totalcart, setTotalcart]=useContext(CartContext)
    // console.log(products)

    const addToCart = (id) => {
        // console.log(findProductFromStorage)
        const addCart=products.find(product=> product.id === id)
        setTotalcart(addCart)
        addToDB(id)
        // console.log(id)
    }

    return (
        <div className='product-container my-container'>
            {
                products.map(product => <ProductCard
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;