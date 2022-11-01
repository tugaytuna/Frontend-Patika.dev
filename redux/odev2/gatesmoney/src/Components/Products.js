import {useState} from 'react'

import {useSelector} from 'react-redux'




function Products() {
    const allProducts = [{
        id: 1,
        name: "Big Mac",
        price: 2,
        img: "https://neal.fun/spend/images/big-mac.jpg"
    },
{
    id: 2,
    name: "Coca-Cola Pack",
    price: 5,
    img: "https://neal.fun/spend/images/coca-cola-pack.jpg"
},
{
    id: 3,
    name: "Book",
    price: 15,
    img: "https://neal.fun/spend/images/book.jpg"
},
{
    id: 4,
    name: "Video Game",
    price: 60,
    img: "https://neal.fun/spend/images/video-game.jpg"
},
{
    id: 5,
    name: "Year of Netflix",
    price: 100,
    img: "https://neal.fun/spend/images/year-of-netflix.jpg"
},
];

const moneyLeft = useSelector((state) => state.money.moneyleft)
const [inputCount, setinputCount] = useState(0)

const buyButtonHandle = (e) => {
    // console.log(`${inputCount} adet, ${prom})
    console.log(e)
}

const sellButtonHandle = () => {
    
}

const inputChangeHandle = (e) => {
    setinputCount(e.target.value)

}

  return (
    <div>
        <h3 className='moneyLeft' >${moneyLeft}</h3>
        {allProducts.map((item) => {
            return (
                <div className='test1'>
                <div key={item.name} className='products'>
                    <img className='productImage' key={item.img} src={item.img}></img>
                    <h2 key={item.id}>{item.name}</h2>
                    <h2 key={item.price}>${item.price}</h2>
                    <button key={item.id} className='sellBtn' onClick={sellButtonHandle}>Sell</button>
                    <input onChange={inputChangeHandle}  className='itemCount' type="number" value={inputCount}></input>
                    <button propt={item.id} key={item.id} className='buyBtn' onClick={buyButtonHandle}>Buy</button>
                </div>
                </div>
            )
        })}
    </div>
  )
}

export default Products