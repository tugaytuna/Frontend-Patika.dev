import React from 'react'

import {useSelector} from 'react-redux'




function Cart() {

  const allProductsRe = useSelector((state) => state.products.products)

  const testVer = 10;
  const testVer2 = 0;
  


  return (
    <div>
      <Basket></Basket>
      <h6>-------------</h6>
      <TotalBasket></TotalBasket>
    </div>
  )
}


function Basket() {
  const allProductsRe = useSelector((state) => state.products.products)
  return (
    <div> 
      {allProductsRe.map((item) => {
      return (
        <div>
      <div key={item.id}>
        {item.name} x {item.piece} = ${item.piece * item.price}
      </div>
        </div>
      )
    })}</div>
  )
}

function TotalBasket() {
  const allProductsRe = useSelector((state) => state.products.products)
  let totalBasketValue = 0;

  // for (let index = 0; index < allProductsRe.length; index++) {
  //   totalBasketValue = allProductsRe[index].price + totalBasketValue
  // }

  const kkHand = (e) => {
    totalBasketValue = parseInt(e.piece * e.price) + totalBasketValue
    return (
      
      parseInt(totalBasketValue)
    )
  }


  return (
    <div> 
      ${allProductsRe.map((item) => kkHand(item))}
    </div>
  )
}



export default Cart