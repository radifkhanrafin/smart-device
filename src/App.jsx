import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import { createContext, useContext, useState } from 'react';

export const ProductContext = createContext([])
export const CartContext = createContext([])
const App = () => {

  const { totalCart, products } = useLoaderData()
  // console.log(totalCart)
  const [totalcart, setTotalcart] = useState(totalCart)
// console.log(totalcart)

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[totalcart, setTotalcart]}>
        <Header></Header>
        <div className=' min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default App;