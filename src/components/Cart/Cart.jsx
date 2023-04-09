import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from '../Cards/CartItem';
import { clearLocalStorage, clearMatchProduct } from '../../utiliti/fakeDB';
import { CartContext, ProductContext } from '../../App';

const Cart = () => {

    const [totalcart, setTotalcart] = useContext(CartContext)
    console.log(totalcart)
    console.log(totalcart.length)

    let totalPrice = 0
    if (totalcart.length > 0) {
        for (const product of totalcart) {
            totalPrice = totalPrice + product.price * product.quantity
        }
    }

    const clearCartProduct = () => {
        clearLocalStorage()
    }
    const clearSingleProduct = (id) =>{
        const remainingCart=totalcart.filter(product=> product.id !==id)
        setTotalcart(remainingCart)
        clearMatchProduct(id)
    }
    return (
        <div className='bg-gray-100  text-gray-900  flex  justify-center items-start min-h-screen '>
            <div className='mt-24 md:mt-0 flex flex-col max-w-3xl p-6 space-y-3 sm:p-10  '>
                <h2 className='text-2xl font-bold'>{totalcart.length ? " Review Cart Items" : " Cart Is EMPTY!"}</h2>
                <ul className='flex justify-center flex-col divide-y divide-gray-700'>
                    {
                        totalcart.map(product => <CartItem
                            product={product}
                            key={product.id}
                            clearSingleProduct={clearSingleProduct}
                        ></CartItem>)
                    }
                </ul>
                <div className='flex flex-col items-end'>
                    <p className='font-semibold'>Total Amount : <span className='font-extrabold'>{totalPrice}$</span></p>
                    <p className='opacity-50'>Not including tax and shipping costs </p>
                </div>

                <div className='flex justify-end'>
                    {
                        totalcart.length > 0 ?
                            <button onClick={()=>clearCartProduct()} className='btn-outlined'>Clear Cart</button>
                            : <Link to='/shop' className='btn-outlined'>Back to shop</Link>
                    }
                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;