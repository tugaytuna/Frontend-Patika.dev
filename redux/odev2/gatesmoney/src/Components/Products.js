import {useState} from 'react'

import {useSelector} from 'react-redux'




function Products() {
    const allProductsTemp = [{
        id: 1,
        name: "Big Mac",
        price: 2,
        img: "https://neal.fun/spend/images/big-mac.jpg",
        piece: 5
    },
    {
        id: 2,
        name: "Coca-Cola Pack",
        price: 5,
        img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
        piece: 0
    },
    {
        id: 3,
        name: "Book",
        price: 15,
        img: "https://neal.fun/spend/images/book.jpg",
        piece: 0
    },
    {
        id: 4,
        name: "Video Game",
        price: 60,
        img: "https://neal.fun/spend/images/video-game.jpg",
        piece: 0
    },
    {
        id: 5,
        name: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        piece: 0
    },
    ];


const [allProducts, setAllProducts] = useState(allProductsTemp)
const moneyLeft = useSelector((state) => state.money.moneyleft)
const [inputCount, setinputCount] = useState(0)
// const basketInit = [{
//     id: 0,
//     count: 0,
// }];
const basketInit = [];
const basket = basketInit

const buyButtonHandle = (e) => {
    // console.log(`${inputCount} adet, ${prom})
    // console.log(inputCount)
    // setinputCount(inputCount +1 )

    // const itemBas = allProducts.find((item) => item.id == e.target.name)
    // itemBas.piece = itemBas.piece + 1;
    // basket.push(itemBas)
    // console.log(basket)

    // const itemBas = allProducts.find((item) => item.id == e.target.name)
    // setAllProducts([...allProducts, allProducts.map((item) => {
    //     if (item.id == e.target.name)
    //     {
    //     item.piece = item.piece + 1;
        
    //     }
    // })])
    
    allProductsTemp[e.target.name -1].piece =  allProductsTemp[e.target.name -1 ].piece + 1;
    setAllProducts([...allProductsTemp]);
    
    console.log(allProductsTemp);
    console.log(allProducts)


}

const sellButtonHandle = () => {
    
}

const inputChangeHandle = (e) => {
    // setinputCount(e.target.value)

}

  return (
    <div>
        <h3 className='moneyLeft' >${moneyLeft}</h3>
        {allProducts.map((item) => {
            return (
                <div key={item.id+"test"} className='test1'>
                <div key={item.name+"productsDiv"} className='products'>
                    <img className='productImage' key={item.img} src={item.img}></img>
                    <h2 key={item.name}>{item.name}</h2>
                    <h2 key={item.price}>${item.price}</h2>
                    <button key={item.id+"sellbtn"} className='sellBtn' onClick={sellButtonHandle}>Sell</button>
                    <input onChange={inputChangeHandle} className='itemCount'  value={item.piece}></input>
                    <button name={item.id} key={item.id+"buybtn"} className='buyBtn' onClick={buyButtonHandle}>Buy</button>
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default Products