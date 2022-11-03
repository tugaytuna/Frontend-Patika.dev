import React from 'react'

import {useSelector} from 'react-redux'

function Cart() {

  const allProductsRe = useSelector((state) => state.products.products)

  const testVer = 10;
  const testVer2 = 0;
  
  const basket = () =>  {allProductsRe.map((item) => {
    return (
      <div>
    <div key={item.id}>
      {item.name} x {item.piece} = ${item.piece * item.price}
    </div>
      </div>
    )
  })}




  return (
    <div>
      {basket}
      
     

    </div>
  )
}

export default Cart