import { getDB } from "../utiliti/fakeDB"

const productAndCartData = async() =>{
const productsData=await fetch('products.json')
const products = await productsData.json()

const cartProduct=getDB()
let totalCart=[]
for (const id in cartProduct) {
    const findProduct = products.find(product=> product.id === id)

    if (findProduct) {
        findProduct.quantity=cartProduct[id]
        totalCart.push(findProduct)
    }
}
return {totalCart , products}
}



export {productAndCartData}