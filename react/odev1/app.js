// const getData = async () => {
//     // get some data
//     console.log("get data works!")
    
// }

import axios from "axios"
let endPointUser = "https://jsonplaceholder.typicode.com/users/"
const endPointPost = "https://jsonplaceholder.typicode.com/posts?userId="

export default async function getData(userID = 1){
    await axios.get(endPointUser+userID).then((data)=> {
        console.log(data.data)
    })
    axios.get(endPointPost+userID).then((data)=>{
        console.log(data.data)
    })
}



// export {getData}