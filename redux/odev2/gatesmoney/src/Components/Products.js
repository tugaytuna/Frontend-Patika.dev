import {useState, useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'
import {buySome, sellSome, pieceIn, pieceOut, allUpdate} from '../redux/moneySlice'




function Products() {
    const allProductsTemp = [{
        id: 1,
        name: "Big Mac",
        price: 2,
        img: "https://neal.fun/spend/images/big-mac.jpg",
        piece: 0
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
const allProductsRe = useSelector((state) => state.products.products)
const moneyLeft = useSelector((state) => state.money.moneyleft)
const [inputCount, setinputCount] = useState(0)

const basketInit = [];
const basket = basketInit

// useEffect(() => {
//     console.log("something change")
// },[allProducts])

const dispatch = useDispatch();


const buyButtonHandle = (e) => {
    const kk = allProducts[e.target.name -1].piece;
    const kkP = allProducts[e.target.name -1].price;
    allProductsTemp[e.target.name -1].piece = kk +1;


    //money reduces
    dispatch(buySome(kkP));

    setAllProducts([...allProductsTemp])
    
    dispatch(allUpdate(allProducts))

}

const sellButtonHandle = (e) => {
    //check count shouldn't be lower from zero
    const kk2 = allProducts[e.target.name -1].piece;
    const kkP2 = allProducts[e.target.name -1].price;
    allProductsTemp[e.target.name -1].piece = kk2 -1;

    dispatch(sellSome(kkP2));


    setAllProducts([...allProductsTemp])
}

const inputChangeHandle = (e) => {
    // setinputCount(e.target.value)

}

  return (
    <div>
        <h3 className='moneyLeft' >${moneyLeft}</h3>
        {allProductsRe.map((item) => {
            return (
                <div key={item.id+"test"} className='test1'>
                <div key={item.name+"productsDiv"} className='products'>
                    <img className='productImage' key={item.img} src={item.img}></img>
                    <h2 key={item.name}>{item.name}</h2>
                    <h2 key={item.price}>${item.price}</h2>
                    <button name={item.id} key={item.id+"sellbtn"} className={(item.piece < 1) ? "disable" : "sellBtn"}  onClick={sellButtonHandle}>Sell</button>
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