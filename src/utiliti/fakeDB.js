// Add data to localStorage
const addToDB = id => {
    let cartProduct = {};

    const findProductFromStorage = JSON.parse(localStorage.getItem('product'))

    if (findProductFromStorage) {
        cartProduct=findProductFromStorage
    }

    // add product quantity 
    const quantity= cartProduct[id]
    if (quantity) {
        const newQuantity=quantity + 1 
        cartProduct[id]=newQuantity
    } else {
        cartProduct[id]=1
    }
    localStorage.setItem('product', JSON.stringify(cartProduct))
}

const getDB =id =>{
    let productCart={}
    const storeCart=localStorage.getItem('product')
    if (storeCart) {
        productCart=JSON.parse(storeCart)
    }
    return productCart
}

const clearMatchProduct = id =>{
    const findProductFromStorage = JSON.parse(localStorage.getItem('product'))
    if (findProductFromStorage) {
        // const cartproduct = JSON.parse(findProductFromStorage)
        if(id in findProductFromStorage){
            delete findProductFromStorage[id]
            localStorage.setItem('product', JSON.stringify(findProductFromStorage))
        }
    }
}
const clearLocalStorage= ()=>{
    const clearStorage=localStorage.removeItem('product')
    return clearStorage
    
}
export { addToDB ,getDB , clearMatchProduct, clearLocalStorage }